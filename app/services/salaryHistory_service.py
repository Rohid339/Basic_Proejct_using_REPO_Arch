from app.repository.salaryHistory import SalaryHistoryRepository

salaryRepo = SalaryHistoryRepository()

class SalaryHistoryService:
    def get_salary(self,db):
        return salaryRepo.get_all(db)
    
    def create(self,db,data):
        return salaryRepo.create(db,id)
    
    def update(self,db,id,data):
        return salaryRepo.update(db,id,data)
    
    def delete_salary(self,db,id):
        return salaryRepo.delete(db,id)
