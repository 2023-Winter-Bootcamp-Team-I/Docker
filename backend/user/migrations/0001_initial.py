# Generated by Django 4.2.3 on 2024-01-08 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('name', models.CharField(max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('is_deleted', models.BooleanField(default=False)),
            ],
        ),
    ]