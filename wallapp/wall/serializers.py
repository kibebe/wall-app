from rest_framework import serializers
from wall.models import Message

# Message serializer
class MessageSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')
    class Meta:
        model = Message
        fields = '__all__'
