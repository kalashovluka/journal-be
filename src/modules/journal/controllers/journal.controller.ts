import { Controller, Get, Post } from '@nestjs/common';
import { JournalService } from '../services/journal.service';

@Controller()
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Get()
  getPosts() {
    return this.journalService.getPosts();
  }

  @Post()
  createPost() {
    return this.journalService.createPost();
  }
}
