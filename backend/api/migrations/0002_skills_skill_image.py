# Generated by Django 4.1.7 on 2023-02-25 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='skills',
            name='skill_image',
            field=models.ImageField(default=None, upload_to='files/images'),
        ),
    ]