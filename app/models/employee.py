from sqlalchemy import Column,Integer,String,Float,ForeignKey
from sqlalchemy.orm import relationship
from app.models.base_model import Base

class Employee(Base):
    __tablename__="EMPLOYEE"
    __table_args__={"schema":"dbo"}

    ID = Column(Integer,primary_key=True,index=True)
    NAME=Column(String)
    EMAIL=Column(String)
    SALARY=Column(Float)
    MANAGER_ID = Column(Integer)
    STATUS= Column(String)

    DEPT_ID = Column(Integer, ForeignKey("dbo.DEPARTMENT.Dept_id"))

    department = relationship("Department",back_populates="employee")
    project = relationship("Project",back_populates="employee")



