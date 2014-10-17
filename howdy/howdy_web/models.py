from django.db import models

class User(models.Model):
    password = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    country_code = models.CharField(max_length=200)
    device_id = models.CharField(max_length=200)