# Dockerized Full-Stack Django + React Template

Minimal full-stack boilerplate using **Django 5 (ASGI/async) + Django Ninja + Celery + Redis + PostgreSQL** on the backend and **React (Vite)** on the frontend, fully containerized with Docker for fast local development.

## 🧩 Features
- **Django 5** (running fully async with **Uvicorn**)  
- **Django Ninja** pre-installed  
- **PostgreSQL** as the default database  
- **Celery + Redis** for background jobs and async tasks  
- **React + Vite** frontend with hot reload  
- Automatic reload for both backend and frontend 
- Split `.env` files for backend and container configuration  

## ⚠️ Important
This project ships with a **placeholder `SECRET_KEY`** inside `backend/.env`.  
You **must replace it** with your own unique key before using the template in production.  

## 🚀 Quick Start
```bash
git clone https://github.com/n-hadi/Django_React_Docker_Template.git
cd Django_React_Docker_Template
docker compose up -d --build
```
Backend → http://localhost:8000
Frontend → http://localhost:5173