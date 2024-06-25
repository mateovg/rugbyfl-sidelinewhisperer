from dataclasses import dataclass
from datetime import datetime


@dataclass
class User:
    id: int
    username: str
    email: str
    registration_date: datetime

    def get_points(self):
        # This is a simplified version of the real implementation
        return sum([p.is_correct() for p in self.get_predictions()])
