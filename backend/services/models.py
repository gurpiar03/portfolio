from django.db import models

# Create your models here.
class Service(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField()
    
    def __str__(self):
        return f"Service: {self.title}"
    