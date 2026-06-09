from repository.employee_repo import (get_all_employees,create_employee)

def fetch_employees(db):
    return get_all_employees(db)

def add_employee(db,employee):
    return create_employee(db,employee)