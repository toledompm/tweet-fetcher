import { IsBoolean, IsOptional } from 'class-validator';
import { TweetDto } from './tweetDto';
import { HashtagDto } from './hashtagDto';

export class TweetHashtagDto {
  readonly tweet?: TweetDto;

  readonly hashtag?: HashtagDto;

  @IsOptional()
  @IsBoolean()
  readonly searchHashtag: boolean = false;
}
