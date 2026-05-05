# https://www.youtube.com/watch?v=AKQ3XEDI9Mw
# schema - person - person of interest - id, iid - missing or POI, ssn, gender, dob

from sqlalchemy import ForeignKey, Column, String, Integer, CHAR, DateTime, Boolean, func
from database.base import Base, NullToEmptyString

class Person(Base):
  __tablename__ = "people"

  id = Column("id", Integer, primary_key=True)
  firstName = Column(NullToEmptyString)
  middleName = Column(NullToEmptyString)
  lastName = Column(NullToEmptyString)
  sirName = Column(NullToEmptyString)
  suffix = Column(NullToEmptyString)
  type = Column(Integer)
  height = Column(Integer)
  weight = Column(Integer)
  hairColor = Column(NullToEmptyString)
  eyeColor = Column(NullToEmptyString)
  ssn = Column(NullToEmptyString)
  gender = Column(NullToEmptyString)
  dob = Column("dob", DateTime)

  def __init__(self, firstName, middleName, lastName, sirName, suffix, type, height, weight, hairColor, eyeColor, ssn, gender, dob):
    self.firstName = firstName
    self.middleName = middleName
    self.lastName = lastName
    self.sirName = sirName
    self.suffix = suffix
    self.type = type
    self.height = height
    self.weight = weight
    self.hairColor = hairColor
    self.eyeColor = eyeColor
    self.ssn = ssn
    self.gender = gender
    self.dob = dob

  def __repr__(self):
    return f"({self.id}) {self.firstName} {self.middleName} {self.lastName} {self.sirName} {self.suffix} {self.type} {self.height} {self.weight} {self.hairColor} {self.eyeColor} {self.ssn} ({self.gender}, {self.dob})"

class Alias(Base):
  __tablename__ = "aliases"

  id = Column("id", Integer, primary_key=True)
  firstName = Column(NullToEmptyString)
  middleName = Column(NullToEmptyString)
  lastName = Column(NullToEmptyString)
  sirName = Column(NullToEmptyString)
  suffix = Column(NullToEmptyString)
  owner = Column(Integer, ForeignKey("people.id"))

  def __init__(self, firstName, middleName, lastName, sirName, suffix, owner):
    self.firstName = firstName
    self.middleName = middleName
    self.lastName = lastName
    self.sirName = sirName
    self.suffix = suffix
    self.owner = owner

  def __repr__(self):
    return f"({self.id}){self.firstName} {self.middleName} {self.lastName} {self.sirName} owned by {self.owner}"

  def validate():
    pass

class Address(Base):
  __tablename__ = "addresses"

  id = Column("id", Integer, primary_key=True)
  type = Column(Integer) # home, work
  name = Column(NullToEmptyString) # name of business if work address
  address1 = Column(NullToEmptyString)
  address2 = Column(NullToEmptyString)
  city = Column(NullToEmptyString)
  state = Column(NullToEmptyString)
  zip5 = Column("zip5", Integer)
  zip4 = Column("zip4", Integer)
  owner = Column(Integer, ForeignKey("people.id"))

  def __init__(self, type, name, address1, address2, city, state, zip5, zip4, owner):
    self.type = type
    self.name = name
    self.address1 = address1
    self.address2 = address2
    self.city = city
    self.state = state
    self.zip5 = zip5
    self.zip4 = zip4
    self.owner = owner

  def __repr__(self):
    return f"({self.id}) {self.type} {self.name} {self.address1} {self.address2} {self.city} {self.state} {self.zip5} {self.zip4} owned by {self.owner}"

  def validate():
    pass

class Email(Base):
  __tablename__ = "emails"

  id = Column("id", Integer, primary_key=True)
  type = Column(Integer) # personel, work
  email = Column(NullToEmptyString(255), unique=True, nullable=False)
  owner = Column(Integer, ForeignKey("people.id"))

  def __init__(self, type, email, owner):
    self.type = type
    self.email = email
    self.owner = owner

  def __repr__(self):
    return f"({self.id}) {self.type} {self.email} owned by {self.owner}"

  def validate():
    pass

class Phone(Base):
  __tablename__ = "phones"

  id = Column("id", Integer, primary_key=True)
  type = Column(Integer) # cell, home, work
  phone = Column(NullToEmptyString(20), unique=True, nullable=False)
  owner = Column(Integer, ForeignKey("people.id"))

  def __init__(self, type, phone, owner):
    self.type = type
    self.phone = phone
    self.owner = owner

  def __repr__(self):
    return f"({self.id}) {self.type} {self.phone} owned by {self.owner}"

  def validate():
    pass
