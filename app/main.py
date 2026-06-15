from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.employee_router import router as employee_router
from app.routers.department_router import router as department_router
from app.routers.project_router import router as project_router
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
        "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(
    employee_router,
    prefix="/employees",
    tags=["Employees"]
)
app.include_router(
    department_router,
    prefix="/department",
    tags=["Department"]
)

app.include_router(
    project_router,
    prefix="/project",
    tags=["Project"]
)