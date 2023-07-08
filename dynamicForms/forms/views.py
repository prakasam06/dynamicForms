from django.shortcuts import render
from django.contrib.auth.models import User,auth
from django.contrib import messages
from django.shortcuts import render ,get_object_or_404
from django.shortcuts import redirect
from .models import formBuilder
# Create your views here.
def home(request):
    return render(request, 'forms/home.html',{})

def login(request):
 if request.method == 'POST':
     username = request.POST['username']
     password = request.POST['password']
     user =auth.authenticate(username=username,password=password)
     if user is not None:
          auth.login(request,user)
          return redirect('home')
     else:
            messages.info(request, 'invalid username or password')
            return redirect('login')
 else:
        return render(request,"forms/login.html")

def signup(request):

    if request.method == 'POST':
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
 
        if User.objects.filter(username=username).exists():
            messages.info(request,'user already exixts')
            return redirect('signup')
        else: 
            user = User.objects.create_user(username=username,email=email,first_name=firstname,last_name=lastname)
            user.set_password(password)
            user.save()
        return redirect('login')
    else:
        return render(request,"forms/signup.html")
    
def logout(request):
    auth.logout(request)
    return redirect('home')

def create(request):
    return render(request,'forms/create.html')

def created(request):
    form_obj = formBuilder(title="First Blog", added_by=request.user)
    form_obj.save()
    return render(request,"forms/home.html")