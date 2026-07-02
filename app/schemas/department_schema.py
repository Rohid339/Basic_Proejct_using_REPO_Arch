from pydantic import BaseModel

class DepartMentCreate(BaseModel):
    # Dept_id:int
    dept_name:str
    budget:str

class DepartMentResponse(BaseModel):
    Dept_id:int
    dept_name:str
    budget:str
    IS_DELETED: bool


    class Config:
        from_attributes=True