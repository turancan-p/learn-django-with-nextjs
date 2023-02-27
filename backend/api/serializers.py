from .models import Skills, UsingType, Projects, Mails
from rest_framework import serializers

class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = "__all__"

class UsingTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsingType
        fields = "__all__"

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = "__all__"

class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mails
        fields = "__all__"