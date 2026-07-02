
from pydantic import BaseModel


class EmployeeCreate(BaseModel):
    # ID:int
    # EMP_CODE:str
    NAME:str
    EMAIL:str
    SALARY:float 
    MANAGER_ID: int | None = None  
    STATUS:str
    DEPT_ID:int
    designation_id:int
    

class EmployeeResponse(BaseModel):
    ID:int
    EMP_CODE:str
    NAME:str
    EMAIL:str
    SALARY:float
    MANAGER_ID:int
    STATUS:str
    DEPT_ID:int
    designation_id:int
    IS_DELETED: bool
    CREATED_AT: str | None
    UPDATED_AT : str | None
    

    class Config:
        from_attributes=True
    