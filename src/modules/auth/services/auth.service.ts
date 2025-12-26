import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Request } from 'express';
import { User } from 'src/generated/prisma/client';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: { username: string; id: number }) {
    const payload = { username: user.username, sub: user.id };

    return { accessToken: this.jwtService.sign(payload) };
  }

  async validateUser(input: {
    username: string;
    password: string;
  }): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findByUsername(input.username);
    if (!user) return null;

    const { password, ...result } = user;
    const isPasswordMatch = await compare(input.password, password);
    if (!isPasswordMatch) return null;

    return result;
  }
}
