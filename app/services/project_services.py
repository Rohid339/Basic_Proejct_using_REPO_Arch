from app.repository.project_repo import ProjectRepository
project_repo = ProjectRepository()

class ProjectServices:
    def get_all_projects(self,db):
        return project_repo.get_all(db)
    
    def get_project_by_id(self,db,id):
        return project_repo.get_by_id(db,id)
    
    def create_project(self,db,employee):
        return project_repo.create(db,employee)
    
    def delete_project(self,db,id):
        return project_repo.delete(db,id)
    
    def update_project(self,db,id,employee):
        return project_repo.update(db,id,employee)