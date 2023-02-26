from django.db import models

class Skills(models.Model):
    skill_name = models.CharField(max_length=50)
    skill_image = models.ImageField(upload_to="files/images", default=None)
    type_name = models.ManyToManyField('UsingType', blank=True)

    def __str__(self):
        return self.skill_name

class UsingType(models.Model):
    name = models.TextField(max_length=50, blank=False)
    
    def __str__(self):
        return self.name