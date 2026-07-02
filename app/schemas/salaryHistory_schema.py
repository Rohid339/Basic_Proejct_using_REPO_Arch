from pydantic import BaseModel

class SalaryHistoryCreate(BaseModel):
    #id:int
    old_salary:float
    new_salary:float
    reason:str
    employee_code:int

class SalaryHistoryResponse(BaseModel):
    id:int
    old_salary:float
    new_salary:float
    reason:str
    employee_code:int

    class Config:
        from_attributes=True
