from datetime import datetime
from app.utils.audit_helper import create_audit_log

class BaseRepository:

    def __init__(self,model):
        self.model = model

    def get_all(self, db):
        query = db.query(self.model)
    
        # check model has IS_DELETED column or not
        if hasattr(self.model, "IS_DELETED"):
            query = query.filter(self.model.IS_DELETED == False)
    
        return query.all()
    
    def get_pk(self,obj):

        if hasattr(obj, "id"):
            return obj.id
        
        if hasattr(obj, "ID"):
            return obj.ID

        if hasattr(obj, "Dept_id"):
            return obj.Dept_id
        
        if hasattr(obj, "designation_id"):
            return obj.designation_id

        if hasattr(obj, "project_id"):
            return obj.project_id

        if hasattr(obj, "designation_id"):
            return obj.designation_id

        return None
    
    def create(self,db,data):
        obj = self.model(**data.dict())

        db.add(obj)
        db.commit()
        db.refresh(obj)

        create_audit_log(
            db=db,
            table_name=self.model.__tablename__,
            record_id=self.get_pk(obj),
            action_type="CREATE",
            new_value=data.dict()
        )
        db.commit()

        return obj
    
    def update(self,db,id,data):
        obj = self.get_by_id(db,id)

        if not obj:
            return None
        
        old_data = {
        column.name: getattr(obj, column.name)
        for column in obj.__table__.columns
    }
        
        for key,value in data.dict().items():
            setattr(obj,key,value)


        db.commit()
        db.refresh(obj)

        create_audit_log(db=db,
                         table_name=self.model.__tablename__,
                         record_id=id,
                         action_type="UPDATE",
                         old_value=old_data,
                         new_value=data.dict(),
                         )
        
        db.commit()

        return obj

    
    def delete(self, db, id):
        obj = self.get_by_id(db, id)

        if not obj:
            return None
        
        old_data={
            "IS_DELETED":obj.IS_DELETED
            }

        obj.IS_DELETED = True

        

        db.commit()
        db.refresh(obj)

        create_audit_log(
            db=db,
            table_name=self.model.__tablename__,
            record_id=id,
             action_type = "DELETE",
             old_value = old_data,
             new_value = {
                             "IS_DELETED":True
                         }

        )
        db.commit()
        return obj

