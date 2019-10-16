from wall.models import Message
from rest_framework import viewsets, permissions
from .serializers import MessageSerializer

# Message viewset
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = MessageSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)