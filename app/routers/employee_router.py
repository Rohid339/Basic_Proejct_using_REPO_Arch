from fastapi import APIRouter,Depends
from sqlalchemy.orm import  Session

from database.connection import get_db
from services.employee_services import fetch_employees,add_employee
from schemas.employee_schema import EmployeeCreate

router=APIRouter()

@router.get("/")
def get_employees(db:Session=Depends(get_db)):
    return fetch_employees(db)

@router.post("/")
def create_employee(employee:EmployeeCreate,db:Session=Depends(get_db)):
    return add_employee(db,employee)