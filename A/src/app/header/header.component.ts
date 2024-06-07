import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { CartService } from '../services/cart/cart-page.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false; 
  cartItemCount: number = 2;

  constructor(public authService: AuthService, private cartService: CartService) {
      this.isLoggedIn = this.authService.isLoggedIn;
  }
  
  ngOnInit(): void {
    this.cartItemCount = this.cartService.getCartItems().length;

    this.cartService.cartChanged.subscribe(() => {
      this.cartItemCount = this.cartService.getCartItems().length;
    });
  }

  logout() {
      this.authService.logout();
      this.isLoggedIn = false;
  }
}
