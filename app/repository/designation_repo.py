from app.models.designation_model import Designation
from app.repository.base_repo import BaseRepository

class DesignationRepository(BaseRepository):
    def __init__(self):
        super().__init__(Designation)

    def get_by_id(self,db,id):
        return db.query(self.model).filter(
            self.model.designation_id==id,
        ).first()