from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import types
Base = declarative_base() # This instance is shared

class NullToEmptyString(types.TypeDecorator):
    impl = types.String
    def process_result_value(self, value, engine):
        return value if value is not None else ""
