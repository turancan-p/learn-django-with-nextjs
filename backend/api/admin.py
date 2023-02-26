from django.contrib import admin
from .models import Skills, UsingType

class SkillAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class TypeAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

admin.site.register(Skills, SkillAdmin)
admin.site.register(UsingType, TypeAdmin)