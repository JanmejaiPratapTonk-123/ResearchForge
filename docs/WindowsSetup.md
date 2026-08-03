# Windows Development Setup Guide

> **Audience:** First-time contributors running Windows 10 (version 2004+) or Windows 11.
> **Time:** ~15 minutes.

This guide walks you through setting up the ResearchForge development environment on Windows using **WSL2** and **Docker Desktop**. By the end, you will have all four services running locally.

---

## Table of Contents

- [Prerequisites Checklist](#prerequisites-checklist)
- [Step 1 — Install WSL2](#step-1--install-wsl2)
- [Step 2 — Install Docker Desktop](#step-2--install-docker-desktop)
- [Step 3 — Install Git for Windows](#step-3--install-git-for-windows)
- [Step 4 — Fork and Clone the Repository](#step-4--fork-and-clone-the-repository)
- [Step 5 — Set Up Environment Variables](#step-5--set-up-environment-variables)
- [Step 6 — Run the Project](#step-6--run-the-project)
- [Step 7 — Verify Services Are Running](#step-7--verify-services-are-running)
- [Stopping and Restarting](#stopping-and-restarting)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites Checklist

Before you begin, confirm the following:

- [ ] Windows 10 version 2004 or later, or Windows 11
- [ ] Administrator access on your machine
- [ ] A stable internet connection (Docker will download container images)
- [ ] A [GitHub account](https://github.com/join)

> **Note:** You do **not** need to install Node.js, Python, or PostgreSQL manually. Docker handles all service dependencies inside containers.

---

## Step 1 — Install WSL2

WSL2 (Windows Subsystem for Linux) is required by Docker Desktop on Windows. It provides a real Linux kernel for running containers.

### 1.1 — Enable WSL and install Ubuntu

Open **PowerShell as Administrator** and run:

```powershell
wsl --install
```

This command enables WSL2, installs the latest Linux kernel, and installs **Ubuntu** as the default distribution.

### 1.2 — Restart your computer

After installation completes, **restart your computer** when prompted.

### 1.3 — Complete Ubuntu setup

After restarting, the Ubuntu terminal will open automatically. Create a UNIX username and password when prompted.

### 1.4 — Verify the installation

Open PowerShell and run:

```powershell
wsl --list --verbose
```

You should see output similar to:

```
  NAME                   STATE           VERSION
* Ubuntu                 Running         2
```

> **Important:** The `VERSION` column must show **2**. If it shows **1**, run: `wsl --set-version Ubuntu 2`

---

## Step 2 — Install Docker Desktop

Docker Desktop provides Docker Engine and Docker Compose, which are used to build and run all ResearchForge services.

### 2.1 — Download and install

1. Download Docker Desktop from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).
2. Run the installer.
3. During installation, ensure **"Use WSL 2 instead of Hyper-V"** is checked.

### 2.2 — Configure WSL2 integration

1. Open Docker Desktop.
2. Go to **Settings → General** and confirm **"Use the WSL 2 based engine"** is enabled.
3. Go to **Settings → Resources → WSL Integration** and enable integration with your Ubuntu distribution.
4. Click **Apply & restart**.

### 2.3 — Verify the installation

Open a **new PowerShell window** and run:

```powershell
docker --version
```

Expected output (version may differ):

```
Docker version 29.4.0, build 9d7ad9f
```

Then verify Docker Compose:

```powershell
docker compose version
```

Expected output:

```
Docker Compose version v5.1.2
```

> **Tip:** If `docker` is not recognized, close and reopen PowerShell. Docker Desktop must be running.

---

## Step 3 — Install Git for Windows

### 3.1 — Download and install

1. Download Git from [https://git-scm.com/downloads/win](https://git-scm.com/downloads/win).
2. Run the installer with the default options.

### 3.2 — Verify the installation

Open PowerShell and run:

```powershell
git --version
```

Expected output:

```
git version 2.53.0.windows.2
```

---

## Step 4 — Fork and Clone the Repository

### 4.1 — Fork the repository

1. Go to [github.com/JanmejaiPratapTonk-123/ResearchForge](https://github.com/JanmejaiPratapTonk-123/ResearchForge).
2. Click the **Fork** button at the top-right corner.

### 4.2 — Clone your fork

Open PowerShell and run (replace `YOUR_USERNAME` with your GitHub username):

```powershell
git clone https://github.com/YOUR_USERNAME/ResearchForge.git
cd ResearchForge
```

### 4.3 — Add the upstream remote

```powershell
git remote add upstream https://github.com/JanmejaiPratapTonk-123/ResearchForge.git
```

Verify your remotes:

```powershell
git remote -v
```

Expected output:

```
origin    https://github.com/YOUR_USERNAME/ResearchForge.git (fetch)
origin    https://github.com/YOUR_USERNAME/ResearchForge.git (push)
upstream  https://github.com/JanmejaiPratapTonk-123/ResearchForge.git (fetch)
upstream  https://github.com/JanmejaiPratapTonk-123/ResearchForge.git (push)
```

---

## Step 5 — Set Up Environment Variables

Each service requires environment variables. Copy the example files to create your local configuration:

```powershell
copy frontend\.env.example frontend\.env.local
copy backend\.env.example backend\.env
copy ai-services\.env.example ai-services\.env
```

> **Note:** The default values in the `.env.example` files work out of the box with Docker Compose. You do not need to edit them for local development.

---

## Step 6 — Run the Project

Make sure **Docker Desktop is running** (check for the Docker whale icon in your system tray), then start all services:

```powershell
docker compose up --build
```

> **First run note:** The first build will download base images and install dependencies. This can take **5–15 minutes** depending on your internet speed. Subsequent starts will be much faster due to Docker layer caching.

You will see log output from all four services. Wait until you see output similar to:

```
researchforge-db           | ... database system is ready to accept connections
researchforge-ai-service   | INFO:     Uvicorn running on http://0.0.0.0:8000
researchforge-backend      | [Backend] Express server running on port 4000
researchforge-frontend     | ✓ Ready in 3.7s
```

> **Tip:** To run containers in the background (detached mode), use `docker compose up --build -d` instead. You can then view logs with `docker compose logs -f`.

---

## Step 7 — Verify Services Are Running

Once all containers are running, verify each service is healthy:

### Frontend (Next.js)

Open your browser and navigate to:

```
http://localhost:3000
```

You should see the ResearchForge web application landing page.

### Backend API

Open your browser and navigate to:

```
http://localhost:4000/health
```

Expected JSON response:

```json
{
  "status": "ok",
  "service": "backend",
  "timestamp": "2026-08-03T17:00:00.000Z"
}
```

### AI Service

Open your browser and navigate to:

```
http://localhost:8000/health
```

Expected JSON response:

```json
{
  "status": "ok",
  "service": "ai-service",
  "timestamp": "2026-08-03T17:00:00.000+00:00"
}
```

### Quick verification command

You can also verify all services from PowerShell:

```powershell
docker compose ps
```

Expected output:

```
NAME                       STATUS              PORTS
researchforge-ai-service   Up                  0.0.0.0:8000->8000/tcp
researchforge-backend      Up                  0.0.0.0:4000->4000/tcp
researchforge-db           Up (healthy)        0.0.0.0:5432->5432/tcp
researchforge-frontend     Up                  0.0.0.0:3000->3000/tcp
```

All four containers should show **Up** status, and `researchforge-db` should show **Up (healthy)**.

---

## Stopping and Restarting

### Stop all services

```powershell
docker compose down
```

This stops and removes all containers but preserves your database data in a Docker volume.

### Restart services (without rebuilding)

```powershell
docker compose up -d
```

### Rebuild after pulling new changes

```powershell
git pull upstream main
docker compose up --build -d
```

### Full reset (remove volumes and rebuild)

```powershell
docker compose down -v
docker compose up --build
```

> **Warning:** `docker compose down -v` removes the database volume. All local database data will be lost.

---

## Troubleshooting

### WSL2 Issues

#### "WSL 2 requires an update to its kernel component"

**Solution:** Download and install the latest WSL2 kernel update from Microsoft:

```
https://aka.ms/wsl2kernel
```

Then restart your computer.

#### WSL version shows 1 instead of 2

**Solution:** Upgrade your distribution to WSL2:

```powershell
wsl --set-version Ubuntu 2
```

#### "The virtual machine could not be started because a required feature is not installed"

**Solution:** Enable virtualization in your BIOS/UEFI settings. The setting is usually called "Intel VT-x" or "AMD-V". Consult your laptop/motherboard manufacturer's documentation for the exact steps.

---

### Docker Desktop Issues

#### "Docker daemon is not running" or "Cannot connect to Docker"

**Solution:**

1. Make sure Docker Desktop is running (check for the whale icon in the system tray).
2. If Docker Desktop is open but Docker commands fail, try restarting Docker Desktop.
3. If the problem persists, restart your computer.

#### Docker Desktop fails to start

**Solution:**

1. Open **PowerShell as Administrator** and run:
   ```powershell
   wsl --shutdown
   ```
2. Restart Docker Desktop.

#### "Port already in use" error

**Solution:** Another application is using one of the required ports (3000, 4000, 5432, or 8000). Find and stop the conflicting process:

```powershell
netstat -ano | findstr :3000
```

Then stop the process using its PID:

```powershell
taskkill /PID <PID_NUMBER> /F
```

Alternatively, change the port in the `.env` file. For example, to change the frontend port:

```
FRONTEND_PORT=3001
```

---

### Docker Compose Build Issues

#### Build fails with network/download errors

**Solution:** This is usually a temporary network issue. Try again:

```powershell
docker compose build --no-cache
docker compose up -d
```

#### "no space left on device"

**Solution:** Docker images and containers can consume significant disk space. Clean up unused resources:

```powershell
docker system prune -a
```

> **Warning:** This removes all unused images, containers, and networks. It will not affect running containers.

---

### General Tips

- **Always run Docker commands from the project root directory** (`ResearchForge/`), not from a subdirectory.
- **Use PowerShell or Command Prompt**, not the WSL Ubuntu terminal, for Docker Compose commands (unless you have Docker configured inside WSL).
- **If a container is stuck**, you can restart just that service:
  ```powershell
  docker compose restart frontend
  ```
- **To view logs for a specific service:**
  ```powershell
  docker compose logs -f backend
  ```

---

👉 **Next Step:** You're all set up! Head to **[docs/GettingStarted.md](GettingStarted.md)** to find your first issue and make your first contribution!
