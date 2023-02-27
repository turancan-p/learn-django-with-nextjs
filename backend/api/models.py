from django.db import models

class Skills(models.Model):
    skill_name = models.CharField(max_length=50)
    skill_image = models.ImageField(upload_to="files/images", default=None)
    type_name = models.ManyToManyField('UsingType', blank=False)

    def __str__(self):
        return self.skill_name

class UsingType(models.Model):
    name = models.TextField(max_length=50, blank=False)
    
    def __str__(self):
        return self.name

class Projects(models.Model):
    name = models.CharField(max_length=255)
    language = models.CharField(max_length=255)
    info_url = models.URLField()
    project_image = models.ImageField(upload_to="files/images/projects", default=None)

    def __str__(self):
        return self.name

class Mails(models.Model):
    sender_name = models.CharField(max_length=50)
    sender_phone = models.CharField(max_length=30)
    sender_email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField(max_length=1000)

    def __str__(self):
        return self.sender_name