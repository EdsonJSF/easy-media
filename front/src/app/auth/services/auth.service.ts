import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoginInterface, SingupInterface } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  singup(user: SingupInterface) {
    let users: SingupInterface[] | string | null =
      localStorage.getItem('users');
    if (users) {
      users = JSON.parse(users) as SingupInterface[];
      const result = users.filter((register) => register.email == user.email);

      if (result.length > 0) return false;

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      this.setToken();

      return true;
    }
    localStorage.setItem('users', JSON.stringify([user]));
    this.setToken();
    return true;
  }

  login(user: LoginInterface): boolean {
    this.setToken();
    return true;
  }

  private setToken() {
    localStorage.setItem('token', 'token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(!!token);
  }
}
