from dataclasses import dataclass


@dataclass
class Team:
    id: int
    name: str
    city: str
    founded: int
