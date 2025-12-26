import { Injectable } from '@nestjs/common';

@Injectable()
export class JournalService {
  getPosts() {
    console.debug('Get Post!');
  }

  createPost() {
    console.debug('Create Post!');
  }
}
