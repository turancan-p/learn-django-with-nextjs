from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Skills, UsingType, Projects, Mails
from .serializers import SkillsSerializer, UsingTypeSerializer, ProjectsSerializer, MailSerializer

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

class ProjectsApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get(self, request, *args, **kwargs):
        projects = Projects.objects.all()
        serializer = ProjectsSerializer(projects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProjectDetailsApiView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, id):
        project = Projects.objects.get(pk=id)
        serializer = ProjectsSerializer(project, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

class MailsApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        mail = Mails.objects.all()
        serializer = MailSerializer(mail, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def sendMessage(request):
    serializer = MailSerializer
    data = request.data
    mail = Mails.objects.create(
        sender_name=data["sender_name"],
        sender_phone=data["sender_phone"],
        sender_email=data["sender_email"],
        subject=data["subject"],
        message=data["message"]
    )
    serializer_class = serializer(data=mail, many=False)
    if serializer_class.is_valid():
        return Response(serializer_class.data)
    else:
        return Response(serializer_class.errors)
