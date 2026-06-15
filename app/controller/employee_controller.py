from app.services.employee_services import EmployeeServices

employee_service = EmployeeServices()

class EmployeeController:
    def get_all_emp(self,db):
        return employee_service.get_all_employees(db)
    
    def get_imp_by_id(self, db, emp_id):
        return employee_service.get_employee_by_id(db, emp_id)
    
    def create_emp(self, db, employee):
        return employee_service.create_employee(db, employee)
    
    def delete_emp(self, db, emp_id):
        return employee_service.delete_employee(db, emp_id)
    
    def update_emp(self,db,id,employee):
        return employee_service.update_employee(db,id,employee)

    