import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  cartChanged: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  addToCart(item: any, quantity: number): void {
    for (let i = 0; i < quantity; i++) {
      this.cartItems.push(item);
    }
    this.cartChanged.emit();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getTotalPrice(items: any[]): number {
    return items.reduce((acc, item) => acc + item.price, 0);
  }

  deleteCartItem(index: number): void {
    this.cartItems.splice(index, 1);
  }
}
