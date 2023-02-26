from django.contrib import admin
from .models import Skills, UsingType, Projects

class SkillAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class TypeAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

admin.site.register(Skills, SkillAdmin)
admin.site.register(UsingType, TypeAdmin)
admin.site.register(Projects, ProjectAdmin)