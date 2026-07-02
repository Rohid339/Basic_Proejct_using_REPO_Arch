from app.services.salaryHistory_service import SalaryHistoryService

salary_controller = SalaryHistoryService()

class SalaryHistoryController:
    def getAllHist(self,db):
        return salary_controller.get_salary(db)
    
    def createSalary(self,db,data):
        return salary_controller(db,data)
    
    def updateSalary(self,db,id,data):
        return salary_controller.update(db,id,data)
    
    def deleteSalary(self,db,id):
        return salary_controller.delete_salary(db,id)