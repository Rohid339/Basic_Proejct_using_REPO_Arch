from sqlalchemy import Column,String,Integer,ForeignKey
from sqlalchemy.orm import relationship
from app.models.base_model import Base



class Project(Base):
    __tablename__="PROJECT"
    __table_args__={"schema":"dbo"}

    project_id=Column(Integer,primary_key=True)
    project_name=Column(String)
    P_status=Column(String)

    employee_id=Column(Integer,ForeignKey("dbo.EMPLOYEE.ID"))

    employee = relationship("Employee",back_populates="project")

