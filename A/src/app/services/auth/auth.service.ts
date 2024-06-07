import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'isLoggedIn';

  get isLoggedIn(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) === 'true';
  }

  set isLoggedIn(value: boolean) {
    localStorage.setItem(this.STORAGE_KEY, value.toString());
  }

  login(username: string, password: string): boolean {
    if (username === 'mthien' && password === '123') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  constructor() {}
}
