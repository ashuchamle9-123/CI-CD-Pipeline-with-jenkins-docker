# 🚀 CI/CD Pipeline with Jenkins & Docker

This project demonstrates a complete DevOps CI/CD pipeline using **Jenkins, Docker, Node.js, and AWS EC2**.  
The application is automatically built, containerized, and deployed using Jenkins.

---

# 📌 Project Overview

In this project, we implemented a full CI/CD workflow:

- Code pushed to GitHub
- Jenkins automatically pulls the latest code
- Docker image is built
- Old container is removed
- New container is deployed
- Application runs on AWS EC2 instance

---

# ⚙️ Tech Stack

- Node.js
- Docker
- Jenkins
- GitHub
- AWS EC2 (Ubuntu)
- Linux

---

# 🏗️ Architecture Diagram
# CI-CD-Pipeline-with-jenkins-docker
GitHub Repository
↓
Jenkins CI/CD Pipeline
↓
Docker Image Build
↓
Docker Container Run
↓
Application Deployed on EC2 (Port 80)


---

# 🔄 CI/CD Pipeline Flow

1. Developer pushes code to GitHub
2. Jenkins detects changes (Webhook / Poll SCM)
3. Jenkins pulls latest code
4. Docker image is created
5. Old container is stopped & removed
6. New container is started
7. Application is live on EC2

---

# 📂 Project Structure


my-app/
│
├── app.js
├── package.json
├── Dockerfile
└── README.md


---

🚀 Application Output

After successful deployment, the application shows:

🚀 Hello from my project
CI/CD-Pipeline-with-jenkins-docker
Deployed using Jenkins CI/CD Pipeline & Docker
