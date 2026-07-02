from app.models.base_model import Base
from sqlalchemy import Column,Integer,String,DateTime
from sqlalchemy.sql import func
class AuditLog(Base):
    __tablename__ = "AUDIT_LOG"
    __table_args__ = {"schema":"dbo"}

    audit_id = Column(Integer,primary_key=True,index=True)
    table_name = Column(String)
    record_id = Column(String)
    action_type = Column(String)
    old_value = Column(String)
    new_value = Column(String)
    changed_by = Column(String)
    changed_at = Column(DateTime,server_default=func.now())

