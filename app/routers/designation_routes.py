from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.controller.designation_controller import DesignationController
from app.schemas.designation_schema import DesignationCreate

router = APIRouter()
designation_controller = DesignationController()

@router.get("/")
def get_all_Designations(
    db:Session=Depends(get_db)
):
    return designation_controller.get_all_designation(db)

@router.post("/")
def create_Designations(
    designation:DesignationCreate,
    db:Session=Depends(get_db)
):
    return designation_controller.create_designation(db,designation)

@router.put("/{id}")
def update_Designations(
    id:int,
    designation:DesignationCreate,
    db:Session = Depends(get_db)
):
    return designation_controller.update_designation(db,id,designation)
