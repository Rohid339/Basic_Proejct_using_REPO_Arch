from  fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.controller.project_controller import ProjectController
from app.schemas.project_schema import ProjectCreate

router = APIRouter()
project_controller=ProjectController()


@router.get("/")
def get_all_projects(
    db:Session=Depends(get_db)
):
    return project_controller.get_all_proj(db)

@router.post("/")
def create_project(
    department:ProjectCreate,
    db:Session=Depends(get_db)
):
    return project_controller.create_proj(db,department)

@router.put("/{id}")
def update_project(
    id:int,
    department:ProjectCreate,
    db:Session=Depends(get_db),
):
  return project_controller.update_proj(db,id,department)  


@router.delete("/{id}")
def delete_project(
   id:int,
   db:Session=Depends(get_db)
):
   return project_controller.delete_proj(db,id)