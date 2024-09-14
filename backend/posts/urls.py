from django.urls import path
from .views import ListPosts
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('posts/', ListPosts.as_view(), name='list-posts'),
    path('posts/<int:pk>/', ListPosts.as_view(), name='update-post'),
    path('posts/<int:pk>/delete/', ListPosts.as_view(), name='delete-post'),
]