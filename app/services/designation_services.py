from app.repository.designation_repo import DesignationRepository

designation_repo = DesignationRepository()

class DesignationServices:
    def get_all_designations(self,db):
        return designation_repo.get_all(db)
    def create_designations(sef,db,data):
        return designation_repo.create(db,data)
    
    def update_designations(self,db,id,data):
        return designation_repo.update(db,id,data)