import { Component } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  menu: boolean = false;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
