import { IsBoolean } from 'class-validator';
import { TweetDto } from './tweetDto';
import { HashtagDto } from './hashtagDto';

export class TweetHashtagDto {
  readonly tweet?: TweetDto;

  readonly hashtag?: HashtagDto;

  @IsBoolean()
  readonly searchHashtag?: boolean;
}
