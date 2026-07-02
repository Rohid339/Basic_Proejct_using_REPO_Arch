from pydantic import BaseModel


class DesignationCreate(BaseModel):
    #designation_id:int
    designation_name:str

class DesignationResponse(BaseModel):
    designation_id:int
    designation_name:str

    class Config:
        from_attributes=True