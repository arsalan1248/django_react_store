from django.contrib import admin
from .models import AppUser


# Register your models here.
class AppUserAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'email', 'username',)
    search_fields = ('email', 'username')

admin.site.register(AppUser, AppUserAdmin)