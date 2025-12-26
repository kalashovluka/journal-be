import { Controller, Post, Request as Req, UseGuards } from '@nestjs/common';
import type { AuthenticatedRequest } from 'express';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req: AuthenticatedRequest) {
    return this.authService.login(req.user);
  }
}
