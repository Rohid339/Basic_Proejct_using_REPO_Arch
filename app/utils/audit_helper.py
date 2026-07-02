from app.models.audit_model import AuditLog
import json


def create_audit_log(
        db,table_name,record_id,action_type,old_value=None,new_value=None,changed_by="System"
):
    audit = AuditLog(

        table_name = table_name,
        record_id=str(record_id),
        action_type = action_type,
        old_value = json.dumps(old_value,default=str)
        if old_value else None,
        new_value = json.dumps(new_value,default=str)
        if new_value else None,
        changed_by = changed_by

    )
    db.add(audit)