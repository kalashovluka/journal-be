import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CreatePostDto } from '../dto/create-post.dto';
import { GetPostsDto } from '../dto/get-posts.dto';

@Controller('/posts')
export class PostsController {
  constructor(private readonly journalService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getPosts(@Query() query: GetPostsDto) {
    console.debug({ query });

    return this.journalService.getPosts({
      page: query.page,
      perPage: query.perPage,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.journalService.createPost({
      title: createPostDto.title,
      text: createPostDto.text,
    });
  }
}
