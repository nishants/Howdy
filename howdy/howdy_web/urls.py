from howdy_web import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]