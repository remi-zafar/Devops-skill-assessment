# 🚀 DevOps Intermediate Skill Assessment

This project demonstrates a complete, automated DevOps workflow for a containerized Node.js application. It covers everything from local development to automated CI/CD and cloud deployment.

## 🏗 Project Architecture
The pipeline is designed for high automation:
1. **Source Control**: Code managed on GitHub.
2. **CI/CD Pipeline**: GitHub Actions triggers on every push to `main`.
3. **Artifact Registry**: Docker images are built and pushed to **Docker Hub**.
4. **Cloud Deployment**: The application is automatically deployed and hosted on **Hugging Face Spaces** using Docker SDK.



## 🛠 Tech Stack
- **Backend:** Node.js (Express.js)
- **Containerization:** Docker (Multi-stage builds)
- **CI/CD:** GitHub Actions
- **Registry:** Docker Hub
- **Deployment:** Hugging Face Spaces

## 🔗 Live Project Links
- **🌐 Live Demo (Hugging Face):** https://huggingface.co/spaces/swen213/devops-assessment
- **🐳 Docker Hub Image:** https://hub.docker.com/repository/docker/remi377/devops-skill-assessment/general
- **🎥 LinkedIn Video Demo:** [PASTE_YOUR_LINKEDIN_POST_URL_HERE]

## 🚀 How to Run Locally
If you have Docker installed, you can pull and run the image directly:
```bash
docker pull remi377/devops-skill-assessment:latest
docker run -p 3000:7860 remi377/devops-skill-assessment:latest

