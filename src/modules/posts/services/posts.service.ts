import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  getPosts(input: { page: number; perPage: number }) {
    return this.prismaService.post.findMany({
      take: input.perPage,
      skip: input.page * input.perPage,
    });
  }

  createPost(data: Prisma.PostCreateInput) {
    return this.prismaService.post.create({ data });
  }
}
