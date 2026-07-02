from app.models.base_model import Base
from sqlalchemy import Column,Integer,String
from sqlalchemy.orm import relationship


class Designation(Base):
    __tablename__ = "DESIGNATION"
    __table_args__ = {"schema":"dbo"}

    designation_id = Column(Integer,primary_key=True)
    designation_name = Column(String)
    
    
    employee = relationship("Employee", back_populates="designation") 