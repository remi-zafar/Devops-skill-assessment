# DevOps Intermediate Skill Assessment

This project is a containerized Node.js application developed for the CodeChine DevOps Task. It demonstrates a complete CI/CD pipeline, Dockerization, and cloud deployment readiness.

## 🚀 Features
- **Node.js Web Server:** A simple Express app.
- **Dockerized:** Fully containerized using a multi-stage Dockerfile.
- **CI/CD Pipeline:** Automated testing and building via GitHub Actions.
- **Deployment Ready:** Configured for cloud platforms like Render/Railway.

## 🛠 Tech Stack
- **Language:** Node.js
- **Framework:** Express.js
- **Containerization:** Docker
- **Automation:** GitHub Actions (YAML)

## 📂 Project Structure
- `app.js`: Main application logic.
- `Dockerfile`: Instructions for building the Docker image.
- `.github/workflows/main.yml`: CI/CD pipeline configuration.
- `.dockerignore`: Files to exclude from the Docker build.

## 🚦 How to Run Locally
1. Clone the repo: `git clone https://github.com/remi-zafar/Devops-skill-assessment.git`
2. Build Docker image: `docker build -t devops-app .`
3. Run container: `docker run -p 3000:3000 devops-app`
