from django.urls import path
from .views import (
    SkillsApiView,
    UsingTypeApiView,
    SkillDetailsApiView,
    UsingTypeDetailsApiView
)
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('skills/', SkillsApiView.as_view()),
    path('skills/<int:id>/', SkillDetailsApiView.as_view()),
    path('types/', UsingTypeApiView.as_view()),
    path('type/<int:id>/', UsingTypeDetailsApiView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)