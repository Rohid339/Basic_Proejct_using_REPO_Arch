from app.services.department_services import DepartmentServices

department_services = DepartmentServices()

class DepartmentController:
    def get_all_dept(self,db):
        return department_services.get_all_departments(db)
    
    def create_dept(self,db,department):
        return department_services.create_department(db,department)
    
    def update_dept(self,db,id,department):
        return department_services.update_department(db,id,department)
    
    def delete_dept(self,db,id):
        return department_services.delete_department(db,id)