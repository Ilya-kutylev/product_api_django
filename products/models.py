from decimal import Decimal

from django.core.validators import MinValueValidator, MinLengthValidator
from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=120, unique=True, validators=[MinLengthValidator(3)])
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2, validators=[MinValueValidator(Decimal('0.10'))])

    def __str__(self):
        return self.title
