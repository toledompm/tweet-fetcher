import { IsString } from 'class-validator';
import { TweetHashtagDto } from './tweetHashtagDto';

export class TweetDto {
  @IsString()
  readonly twitterId: string;

  @IsString()
  readonly body: string;

  readonly hashtags?: TweetHashtagDto[] = [];
}
