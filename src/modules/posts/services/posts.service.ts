import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPosts(input: { page: number; perPage: number; userId: number }) {
    const [posts, total] = await this.prismaService.$transaction([
      this.prismaService.post.findMany({
        take: input.perPage,
        skip: input.page * input.perPage,
        orderBy: { id: 'desc' },
        where: { userId: input.userId },
      }),
      this.prismaService.post.count({ where: { userId: input.userId } }),
    ]);

    return { posts, total };
  }

  createPost(data: Prisma.PostCreateInput) {
    return this.prismaService.post.create({ data });
  }
}
