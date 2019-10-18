from django.urls import path, include
from .api import RegisterApi, LoginApi, UserApi
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterApi.as_view(), name='register'),
    path('api/auth/login', LoginApi.as_view(), name='login'),
    path('api/auth/user', UserApi.as_view(), name='user'),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
