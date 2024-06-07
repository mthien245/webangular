import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart-page.service'; 
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})

export class FoodPageComponent implements OnInit {
  food!: Food;
  quantity: number = 1;

  constructor(private activatedRoute: ActivatedRoute, 
              private foodService: FoodService,
              private AuthService: AuthService,
              private cartService: CartService) {
    activatedRoute.params.subscribe((params) => {
      this.food = foodService.getFoodById(params['id']);
    });
  }

  addToCart(quantity: number): void {
    if (!this.AuthService.isLoggedIn) {
      alert('Bạn chưa đăng nhập');
      return;
    }

    this.cartService.addToCart(this.food, quantity);
  }

  ngOnInit(): void {
      
  }
}
