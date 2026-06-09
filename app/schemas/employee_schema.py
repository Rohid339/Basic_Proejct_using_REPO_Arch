from pydantic import BaseModel


class EmployeeCreate(BaseModel):
    ID:int
    NAME:str
    EMAIL:str
    SALARY:float
    MANAGER_ID:int
    DEPT_ID:int
    STATUS:int

class EmployeeResponse(BaseModel):
    ID:int
    NAME:str
    EMAIL:str
    SALARY:float
    MANAGER_ID:int
    DEPT_ID:int
    STATUS:int

    class Config:
        from_attributes=True
    