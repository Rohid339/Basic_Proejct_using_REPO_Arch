from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.controller.audit_controller import AuditController
from app.schemas.audit_schema import AuditCreate

router = APIRouter()
audit_Controller = AuditController()

@router.get("/")
def get_all_audits(
    db:Session=Depends(get_db)
):
    return audit_Controller.get_all_Audit(db)

@router.get("/{id}")
def get_BY_id(
    id:int,
    db:Session=Depends(get_db)
):
    return audit_Controller.get_Audit_by_id(db,id)