from app.models.department import Department
from app.repository.base_repo import BaseRepository

class DepartmentRepository(BaseRepository):
    def __init__(self):
        super().__init__(Department)

    def get_by_id(self,db,id):
        return db.query(self.model).filter(
            self.model.Dept_id==id,
            self.model.IS_DELETED == False
        ).first()
        
