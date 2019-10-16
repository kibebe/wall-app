from django.shortcuts import render

# Entry view to our single page app
def index(request):
    return render(request, 'frontend/index.html')
