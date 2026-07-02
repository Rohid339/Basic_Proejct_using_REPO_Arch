from fastapi import FastAPI
from contextlib import asynccontextmanager

from app.database.connection import engine
from app.models.base_model import Base
from app.models.audit_model import AuditLog
from app.models.employee import Employee
from app.models.department import Department
from app.models.designation_model import Designation
from app.models.project import Project
from app.models.SalaryHistory_model import SalaryHistory

from fastapi.middleware.cors import CORSMiddleware
from app.routers.employee_router import router as employee_router
from app.routers.department_router import router as department_router
from app.routers.project_router import router as project_router
from app.routers.audit_route import router as audit_router
from app.routers.designation_routes import router as designation_router



@asynccontextmanager
async def lifespan(app:FastAPI):
    Base.metadata.create_all(bind=engine)
    print("Tables created / verified")
    yield


app=FastAPI(lifespan=lifespan)

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


app.include_router(
    audit_router,
    prefix="/audit",
    tags=["Audit"]
)

app.include_router(
    designation_router,
    prefix="/designation",
    tags=["Designation"]
)