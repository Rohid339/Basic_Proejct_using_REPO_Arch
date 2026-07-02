from pydantic import BaseModel

class AuditCreate(BaseModel):
    table_name:str
    record_id :str
    action_type:str
    old_value :str | None = None
    new_value :str | None = None
    changed_by :str

class AuditResponse(BaseModel):
    audit_id : int
    table_name: str
    record_id: str
    action_type: str
    old_value: str | None
    new_value: str | None
    changed_by: str
    changed_at: str


    class Config:
        from_attributes= True