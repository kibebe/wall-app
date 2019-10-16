from rest_framework import serializers
from wall.models import Message

# Message serializer
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'