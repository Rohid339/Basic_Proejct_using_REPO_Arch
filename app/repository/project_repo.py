from  app.models.project import Project
from app.repository.base_repo import BaseRepository

class ProjectRepository(BaseRepository):
    def __init__(self):
        super().__init__(Project)

    def get_by_id(self,db,id):
        return db.query(self.model).filter(
            self.model.project_id==id
        ).first()