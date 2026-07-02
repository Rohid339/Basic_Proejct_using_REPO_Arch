from app.services.designation_services import DesignationServices

designation_service = DesignationServices()

class DesignationController:
    def get_all_designation(self,db):
        return designation_service.get_all_designations(db)
    def create_designation(self,db,data):
        return designation_service.create_designations(db,data)
    def update_designation(self,db,id,data):
        return designation_service.update_designations(db,id,data)