from dataclasses import dataclass
from datetime import datetime


@dataclass
class Prediction:
    id: int
    match_id: int
    home_score: int
    away_score: int
    created_at: datetime
    updated_at: datetime
