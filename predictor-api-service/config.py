class Config:
    # more config options: ei database connection strings, etc

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True


confg = {
    'development': 'DevelopmentConfig',
    'testing': 'TestingConfig',
    'default': 'DevelopmentConfig'
}
