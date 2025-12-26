import { Injectable } from '@nestjs/common';
import { User } from 'src/generated/prisma/client';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findByUsername(username: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { username } });
  }
}
