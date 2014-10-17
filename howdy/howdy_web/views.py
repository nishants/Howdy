from django.shortcuts import render
from django.template import RequestContext, loader
from django.http import HttpResponse

def index(request):
	template = loader.get_template('index.html')
	context = RequestContext(request, {})
	return HttpResponse(template.render(context))


def login(request):
	return HttpResponse("howdy")

