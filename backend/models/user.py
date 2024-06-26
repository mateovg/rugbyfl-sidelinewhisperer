from dataclasses import dataclass
from datetime import datetime


@dataclass
class User:
    id: int
    username: str
    email: str
    registration_date: datetime
