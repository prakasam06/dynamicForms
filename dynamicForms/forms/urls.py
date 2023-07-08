from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name = 'home'),
    path('/forms/login',views.login,name='login'),
    path('/forms/signup',views.signup,name='signup'),
    path('forms/logout',views.logout,name='logout'),
    path('forms/create',views.create,name='create'),
    path('forms/created',views.created,name='created'),
]