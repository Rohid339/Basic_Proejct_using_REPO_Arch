from sqlalchemy import Column,Integer,String,Float,Boolean,ForeignKey,DateTime
from sqlalchemy.orm import relationship
from app.models.base_model import Base
from sqlalchemy.sql import func

class Employee(Base):
    __tablename__="EMPLOYEE"
    __table_args__={"schema":"dbo"}

    ID = Column(Integer,primary_key=True,index=True)
    EMP_CODE = Column(String,unique=True)
    NAME=Column(String)
    EMAIL=Column(String)
    SALARY=Column(Float)
    MANAGER_ID = Column(Integer)
    STATUS= Column(String)
    IS_DELETED=Column(Boolean,default=False)

    DEPT_ID = Column(Integer, ForeignKey("dbo.DEPARTMENT.Dept_id"))
    designation_id = Column(Integer,ForeignKey("dbo.DESIGNATION.designation_id"))
    CREATED_AT = Column(DateTime,server_default=func.now())
    UPDATED_AT = Column(DateTime,server_default=func.now(),onupdate=func.now())


    department = relationship("Department",back_populates="employee")
    project = relationship("Project",back_populates="employee")
    designation = relationship("Designation",back_populates="employee")
    salary_history = relationship("SalaryHistory",back_populates="employee")


