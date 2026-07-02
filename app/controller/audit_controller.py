from app.services.audit_services import AuditService

audit_serivce = AuditService()

class AuditController:
    def get_all_Audit(self,db):
        return audit_serivce.get_all_audits(db)
    
    def get_Audit_by_id(self,db,id):
        return audit_serivce.get_audit_by_id(db,id)