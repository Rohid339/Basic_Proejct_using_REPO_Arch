from app.models.SalaryHistory_model import SalaryHistory
from app.repository.base_repo import BaseRepository


class SalaryHistoryRepository(BaseRepository):
    def __init__(self):
        super().__init__(SalaryHistory)

    def get_by_id(self,db,id):
        return db.query(self.model).filter(
            self.model.id==id
        ).first()
    
