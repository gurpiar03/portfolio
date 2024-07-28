from rest_framework.routers import DefaultRouter
from services.api.urls import Service_router
from django.urls import path, include

router=DefaultRouter()
#services
router.registry.extend(Service_router.registry)

urlpatterns = [
    path('',include(router.urls))
]
