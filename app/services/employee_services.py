# from app.repository.employee_repo import (get_all_employees,create_employee)

# def fetch_employees(db):
#     return get_all_employees(db)

# def add_employee(db,employee):
#     return create_employee(db,employee)


from app.repository.employee_repo import EmployeeRepository

employee_repo = EmployeeRepository()

class EmployeeServices:
    def get_all_employees(self,db):
        return employee_repo.get_all(db)
    
    def get_employee_by_id(self, db, emp_id):
        return employee_repo.get_by_id(db, emp_id)

    def create_employee(self, db, employee):
        return employee_repo.create(db, employee)

    def delete_employee(self, db, emp_id):
        return employee_repo.delete(db, emp_id)
    
    def update_employee(self,db,id,employee):
        return employee_repo.update(db,id,employee)