import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    console.debug('Login!');
  }

  logout() {
    console.debug('Logout!');
  }
}
