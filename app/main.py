from fastapi import FastAPI
from routers.employee_router import router as employee_router
app=FastAPI()
app.include_router(
    employee_router,
    prefix="/employees",
    tags=["Employees"]
)