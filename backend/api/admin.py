from django.contrib import admin
from .models import Skills, UsingType, Projects, Mails

class SkillAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class TypeAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class MailsAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

admin.site.register(Skills, SkillAdmin)
admin.site.register(UsingType, TypeAdmin)
admin.site.register(Projects, ProjectAdmin)
admin.site.register(Mails, MailsAdmin)