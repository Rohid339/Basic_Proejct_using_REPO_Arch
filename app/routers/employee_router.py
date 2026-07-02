from fastapi import APIRouter,Depends
from sqlalchemy.orm import  Session

from app.database.connection import get_db
from app.controller.employee_controller import EmployeeController
from app.schemas.employee_schema import EmployeeCreate

router=APIRouter()
employee_controller = EmployeeController()

@router.get("/")
def get_all_employees(
    db: Session = Depends(get_db)
):
    return employee_controller.get_all_emp(db)

@router.get("/{id}")
def get_Emp_by_id(
    id:int,
    db: Session = Depends(get_db)
):
    return employee_controller.get_imp_by_id(db,id)

@router.post("/")
def create_employee(
    employee: EmployeeCreate,
    db: Session = Depends(get_db)
):
    return employee_controller.create_emp(
        db,
        employee
    )

@router.put("/{id}")
def update_employee(
    id:int,
    employee:EmployeeCreate,
    db:Session = Depends(get_db)
):
    return employee_controller.update_emp(
        db,
        id,
        employee
    )

@router.delete("/{emp_id}")
def delete_employee(
    emp_id:int,
    db:Session=Depends(get_db)
):
    return employee_controller.delete_emp(db,emp_id)