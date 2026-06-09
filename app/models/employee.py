from sqlalchemy import Column,Integer,String,Float
from sqlalchemy.orm import declarative_base

Base =declarative_base()

class Employee(Base):
    __tablename__="EMP"
    __table_args__={"schema":"dbo"}

    ID = Column(Integer,primary_key=True,index=True)
    NAME=Column(String)
    EMAIL=Column(Integer)
    SALARY=Column(Float)
    MANAGER_ID = Column(Integer)
    DEPT_ID=Column(Integer)
    STATUS= Column(String)
    



