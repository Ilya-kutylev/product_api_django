from django.urls import path
from . import views

urlpatterns = [
    path('', views.product_page, name="product_page"),

    path('api/v1/products/', views.list_product, name='list_products'),
    path('api/v1/products/create/', views.create_product, name='create_product'),
]
