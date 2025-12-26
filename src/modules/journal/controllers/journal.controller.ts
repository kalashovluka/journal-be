import { Controller, Get, Post } from '@nestjs/common';
import { JournalService } from '../services/journal.service';

@Controller()
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Get()
  getRecords() {
    return this.journalService.getRecords();
  }

  @Post()
  createRecord() {
    return this.journalService.createRecord();
  }
}
