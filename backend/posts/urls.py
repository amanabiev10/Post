from django.urls import path
from .views import ListPosts, UpdatePost, DeletePost


urlpatterns = [
    path('posts/', ListPosts.as_view(), name='list-posts'),
    path('posts/<int:pk>/', UpdatePost.as_view(), name='update-post'),
    path('posts/<int:pk>/delete/', DeletePost.as_view(), name='delete-post'),
]
