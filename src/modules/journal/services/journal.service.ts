import { Injectable } from '@nestjs/common';

@Injectable()
export class JournalService {
  getRecords() {
    console.debug('Get Records!');
  }

  createRecord() {
    console.debug('Create Record!');
  }
}
