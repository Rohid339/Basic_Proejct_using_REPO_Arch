from sqlalchemy import Column,String,Integer
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Department(Base):
    __tablename__="Department"

    Dept_id=Column(Integer,primary_key=True)
    dept_name=Column(String)
    budget=Column(String)
    