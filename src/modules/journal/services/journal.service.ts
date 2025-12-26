import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';

@Injectable()
export class JournalService {
  constructor(private readonly prismaService: PrismaService) {}

  getPosts() {
    console.debug('Get Post!');
  }

  createPost(data: Prisma.PostCreateInput) {
    return this.prismaService.post.create({ data });
  }
}
