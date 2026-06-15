from sqlalchemy import Column,String,Integer
from app.models.base_model import Base
from sqlalchemy.orm import relationship


class Department(Base):
    __tablename__="DEPARTMENT"
    __table_args__={"schema":"dbo"}

    Dept_id=Column(Integer,primary_key=True,)
    dept_name=Column(String)
    budget=Column(String)
    
    employee = relationship("Employee", back_populates="department")