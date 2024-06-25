from dataclasses import dataclass
from datetime import datetime

class User:
    id: int
    username: str
    email: str
    last_active: datetime

    def get_predictions(self):
        return data_service.get_predictions(self.id)

    def get_points(self):
        # This is a simplified version of the real implementation
        return sum([p.is_correct() for p in self.get_predictions()])
    
