from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Skills, UsingType
from .serializers import SkillsSerializer, UsingTypeSerializer

class SkillsApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get(self, request, *args, **kwargs):
        skills = Skills.objects.all()
        serializer = SkillsSerializer(skills, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class SkillDetailsApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, id):
        skill = Skills.objects.get(pk=id)
        serializer = SkillsSerializer(skill, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UsingTypeApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, *args, **kwargs):
        types = UsingType.objects.all()
        serializer = UsingTypeSerializer(types, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UsingTypeDetailsApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, id):
        types = UsingType.objects.get(pk=id)
        serializer = UsingTypeSerializer(types, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)