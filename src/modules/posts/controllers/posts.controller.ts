import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CreatePostDto } from '../dto/create-post.dto';
import { GetPostsDto } from '../dto/get-posts.dto';
import { AuthenticatedRequest } from 'express';

@Controller('/posts')
export class PostsController {
  constructor(private readonly journalService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getPosts(@Request() req: AuthenticatedRequest, @Query() query: GetPostsDto) {
    return this.journalService.getPosts({
      page: query.page,
      perPage: query.perPage,
      userId: req.user.id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createPost(
    @Request() req: AuthenticatedRequest,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.journalService.createPost({
      title: createPostDto.title,
      text: createPostDto.text,
      userId: req.user.id,
    });
  }
}
