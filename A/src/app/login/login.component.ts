import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string = '';
    password: string = '';

    loginError = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    login() {
        const isAuthenticated = this.authService.login(this.username, this.password);
        if (isAuthenticated) {
            this.router.navigate(['/']);
            this.loginError = false;
        } else {
            this.loginError = true; 
        }
    }
}
