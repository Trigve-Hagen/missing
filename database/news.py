# schema - news - newsId, station, article, URL
# what could be used to grab the text of the article?
from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR, DateTime, Boolean, func
from database.base import Base, NullToEmptyString # Import shared base

class News(Base):
  __tablename__ = "news"

  id = Column("id", Integer, primary_key=True)
  station = Column(NullToEmptyString)
  news = Column(NullToEmptyString)
  owner = Column(Integer, ForeignKey("people.id"))

  def __init__(self, id, station, news, owner):
    self.eid = id
    self.station = station
    self.news = news
    self.owner = owner

  def __repr__(self):
    return f"({self.id}) {self.station} {self.news} owned by {self.owner}"

  def validate():
    pass
