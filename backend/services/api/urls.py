from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet

Service_router=DefaultRouter()
Service_router.register(r'services',ServiceViewSet)