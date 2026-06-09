from models.employee import Employee

def get_all_employees(db):
    return db.query(Employee).all()

def create_employee(db,employee):
    new_emp=Employee(**employee.dict())
    db.add(new_emp)
    db.commit()
    db.refresh(new_emp)

    return new_emp
