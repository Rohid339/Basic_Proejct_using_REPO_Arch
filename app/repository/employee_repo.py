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
from datetime import datetime
from app.utils.audit_helper import create_audit_log
 
class EmployeeRepository(BaseRepository):
    def __init__(self):
        super().__init__(Employee)

    def get_by_id(self,db,id):
        return db.query(self.model).filter(
            self.model.ID==id,
            self.model.IS_DELETED == False
        ).first()
    
    def createEmployee(self,db,data):
        employee_data = data.dict()  # convert pydantic object to dictionary

        #Get the last employee
        last_employee = db.query(Employee).order_by(Employee.ID.desc()).first()

        #Generate EMP_CODE 
        if last_employee:
            last_code = last_employee.EMP_CODE #(EMP005)
            last_number = int(last_code.replace("EMP",""))
            new_number = last_number+1
            
        else:
            new_number = 1 

        employee_data["EMP_CODE"] = f"EMP{new_number:04d}"

        new_employee = Employee(**employee_data)
        db.add(new_employee)
        db.commit()
        db.refresh(new_employee)

        create_audit_log(
            db=db,
            table_name=self.model.__tablename__,
            record_id=new_employee.ID,
            action_type="CREATE",
            new_value=employee_data,
        )
        db.commit()
        return new_employee
