from sqlalchemy import Column,String,Integer
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Project(Base):
    __tablename__="Project"

    project_id=Column(Integer,primary_key=True)
    projectName=Column(String)
    employee_id=Column(Integer)
    status=Column(String)