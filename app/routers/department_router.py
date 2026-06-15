from  fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.controller.department_controller import DepartmentController
from app.schemas.department_schema import DepartMentCreate

router = APIRouter()
department_controller=DepartmentController()


@router.get("/")
def get_all_departments(
    db:Session=Depends(get_db)
):
    return department_controller.get_all_dept(db)

@router.post("/")
def create_department(
    department:DepartMentCreate,
    db:Session=Depends(get_db)
):
    return department_controller.create_dept(db,department)

@router.put("/{id}")
def update_department(
    id:int,
    department:DepartMentCreate,
    db:Session=Depends(get_db),
):
  return department_controller.update_dept(db,id,department)  


@router.delete("/{id}")
def delete_department(
   id:int,
   db:Session=Depends(get_db)
):
   return department_controller.delete_dept(db,id)