# from app.models.employee import Employee

# def get_all_employees(db):
#     return db.query(Employee).all()

# def create_employee(db,employee):
#     new_emp=Employee(**employee.dict())
#     db.add(new_emp)
#     db.commit()
#     db.refresh(new_emp)

#     return new_emp
from app.models.employee import Employee
from app.repository.base_repo import BaseRepository

class EmployeeRepository(BaseRepository):
    def __init__(self):
        super().__init__(Employee)

    def get_by_id(self,db,id):
        return db.query(self.model).filter(
            self.model.ID==id
        ).first()
