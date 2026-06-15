from app.services.project_services import ProjectServices

project_services = ProjectServices()

class ProjectController:
    def get_all_proj(self,db):
        return project_services.get_all_projects(db)
    
    def get_proj_by_id(self, db, emp_id):
        return project_services.get_project_by_id(db, emp_id)
    
    def create_proj(self, db, employee):
        return project_services.create_project(db, employee)
    
    def delete_proj(self, db, emp_id):
        return project_services.delete_project(db, emp_id)
    
    def update_proj(self,db,id,employee):
        return project_services.update_project(db,id,employee)