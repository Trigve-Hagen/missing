# schema - category - Id, type, name
from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR, DateTime, Boolean, func
from database.base import Base, NullToEmptyString # Import shared base

class Category(Base):
  __tablename__ = "categories"

  id = Column("id", Integer, primary_key=True)
  type = Column(NullToEmptyString(20)) # contactType
  name = Column(NullToEmptyString(255))

  def __init__(self, type, name):
    self.type = type
    self.name = name

  def __repr__(self):
    return f"({self.id}) {self.type} {self.name}"

  def validate():
    pass
