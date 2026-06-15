class BaseRepository:

    def __init__(self,model):
        self.model = model

    def get_all(self,db):
        return db.query(self.model).all()
    
    
    
    def create(self,db,data):
        obj = self.model(**data.dict())

        db.add(obj)
        db.commit()
        db.refresh(obj)

        return obj
    
    def update(self,db,id,data):
        obj = self.get_by_id(db,id)

        if not obj:
            return None
        
        for key,value in data.dict().items():
            setattr(obj,key,value)

        db.commit()
        db.refresh(obj)

        return obj

    
    def delete(self, db, id):
        obj = self.get_by_id(db, id)

        if obj:
            db.delete(obj)
            db.commit()

        return obj

