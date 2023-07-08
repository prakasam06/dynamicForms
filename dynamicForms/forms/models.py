from urllib import request
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.conf import settings
# Create your models here.



class formBuilder(models.Model):
   
    added_by = models.CharField(max_length=200,null=True)
    title = models.CharField(max_length=200)
    # html = models.TextField()
    # created_date = models.DateTimeField(default=timezone.now)

  