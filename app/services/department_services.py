from app.repository.department_repo import DepartmentRepository

department_repo=DepartmentRepository()


class DepartmentServices:
    def get_all_departments(self,db):
        return department_repo.get_all(db)
    
    def create_department(self,db,department):
        return department_repo.create(db,department)
    
    def update_department(self,db,id,department):
        return department_repo.update(db,id,department)
    
    def delete_department(self,db,id):
        return department_repo.delete(db,id)