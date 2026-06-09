from pydantic import BaseModel

class ProjectCreate(BaseModel):
    project_id:int
    projectName:str
    employee_id:int
    status:str


class ProjectResponse(BaseModel):
    project_id:int
    projectName:str
    employee_id:int
    status:str

    class Config:
        from_attributes=True