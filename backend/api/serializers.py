from .models import Skills, UsingType
from rest_framework import serializers

class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = "__all__"

class UsingTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsingType
        fields = "__all__"