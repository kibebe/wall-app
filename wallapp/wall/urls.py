from rest_framework import routers
from .api import MessageViewSet

router = routers.DefaultRouter()
router.register('api/messages', MessageViewSet, 'messages')

urlpatterns = router.urls