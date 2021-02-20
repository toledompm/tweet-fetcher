import { IsString } from 'class-validator';

export class TweetDto {
  @IsString()
  readonly author: string;

  @IsString()
  readonly body: string;

  @IsString({ each: true })
  readonly hashtags?: string[];
}
