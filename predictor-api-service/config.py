class Config:
    DEBUG = True
    TESTING = False
    # more config options: ei database connection strings, etc


class TestingConfig(Config):
    TESTING = True
