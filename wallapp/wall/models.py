from django.db import models
from django.contrib.auth.models import User

# Wall message model
class Message(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')

    objects = models.Manager()
