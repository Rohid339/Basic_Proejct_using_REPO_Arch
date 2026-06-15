
from pydantic import BaseModel


class EmployeeCreate(BaseModel):
    # ID:int
    NAME:str
    EMAIL:str
    SALARY:float 
    MANAGER_ID: int | None = None  
    STATUS:str
    DEPT_ID:int
    

class EmployeeResponse(BaseModel):
    # ID:int
    NAME:str
    EMAIL:str
    SALARY:float
    MANAGER_ID:int
    STATUS:str
    DEPT_ID:int
    

    class Config:
        from_attributes=True
    