from app.repository.base_repo import BaseRepository
from app.models.audit_model import AuditLog

class AuditRepository(BaseRepository):
    
    def __init__(self):
        super().__init__(AuditLog)

    # def create_audit(self,db,data):
    #     audit = self.model(**data.dict())
        
    #     db.add(audit)
    #     db.flush()

    #     audit.audit_code = f"AUD_{audit.audit_id}"

    #     db.commit()
    #     db.refresh(audit)

    #     return audit
    
    def get_by_id(self,db,id):
        return db.query(self.model).filter(
            self.model.audit_id == id
        ).first()