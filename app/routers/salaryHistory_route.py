from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.controller.Salary_Controller import SalaryHistoryController
from app.schemas.salaryHistory_schema import SalaryHistoryCreate

router=APIRouter()
salary_history = SalaryHistoryController()

@router.get("/")
def get_all_salary(
    db: Session = Depends(get_db)
):
    return salary_history.getAllHist(db)


@router.post("/")
def create_salary(
    data: SalaryHistoryCreate,
    db: Session = Depends(get_db)
):
    return salary_history.createSalary(
        db,
        data
    )

@router.put("/{id}")
def update_salary(
    id:int,
    data: SalaryHistoryCreate,
    db:Session = Depends(get_db)
):
    return salary_history.updateSalary(
        db,
        id,
        data
    )

@router.delete("/{emp_id}")
def delete_employee(
    emp_id:int,
    db:Session=Depends(get_db)
):
    return salary_history.deleteSalary(db,emp_id)