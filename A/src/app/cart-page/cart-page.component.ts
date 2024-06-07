import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart-page.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: Food[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(cartItems: Food[]): number {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  getCartItemCount(): number {
    return this.cartItems.length;
  }

  checkout(): void {
    this.cartItems = [];
  }
}
