import { Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login() {
    return this.authService.login();
  }

  @Post()
  logout() {
    return this.authService.logout();
  }
}
