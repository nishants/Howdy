from django.contrib import admin
from django.conf.urls import url
from howdy_web import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    # url(r'^admin/', include(admin.site.urls)),
]