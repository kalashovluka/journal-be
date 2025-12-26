import { Type } from 'class-transformer';

export class GetPostsDto {
  @Type(() => Number)
  page: number;

  @Type(() => Number)
  perPage: number;
}
