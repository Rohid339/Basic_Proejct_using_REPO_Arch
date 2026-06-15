from pydantic import BaseModel

class ProjectCreate(BaseModel):
    # project_id:int
    project_name:str
    employee_id:int
    P_status:str


class ProjectResponse(BaseModel):
    # project_id:int
    project_name:str
    employee_id:int
    P_status:str

    class Config:
        from_attributes=True