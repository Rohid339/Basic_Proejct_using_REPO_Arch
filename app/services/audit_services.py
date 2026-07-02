from app.repository.audit_repository import AuditRepository

audit_repo = AuditRepository()

class AuditService:
    def get_all_audits(self,db):
        return audit_repo.get_all(db)
    
    def get_audit_by_id(self,db,id):
        return audit_repo.get_by_id(db,id)
    