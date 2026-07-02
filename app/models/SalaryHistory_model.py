from sqlalchemy import Integer,Column,Float,String,ForeignKey,DateTime
from datetime import datetime
from sqlalchemy.orm import relationship

from app.models.base_model import Base
class SalaryHistory(Base):
    __tablename__ = "SALARY_HISTORY"
    __table_args__ = {"schema":"dbo"}

    id = Column(Integer,primary_key=True,index=True)
    old_salary = Column(Float,nullable=False)
    new_salary = Column(Float,nullable=False)
    reason = Column(String,nullable=False)
    changed_at = Column(DateTime,default=datetime.utcnow())
    employee_code = Column(Integer,ForeignKey("dbo.EMPLOYEE.ID"),nullable=False)

    #relationship

    employee = relationship("Employee",back_populates="salary_history")