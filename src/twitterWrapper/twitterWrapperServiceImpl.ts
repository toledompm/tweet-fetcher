import { Injectable, Inject } from '@nestjs/common';
import { TwitterWrapperService } from './twitterWrapperService';
import { TweetDto } from '../tweet/tweetDto';
import { TweetService } from '../tweet/tweetService';
import { TWEET_SERVICE } from '../common/consts';

@Injectable()
export class TwitterWrapperServiceImpl implements TwitterWrapperService {
  constructor(
    @Inject(TWEET_SERVICE) private readonly tweetService: TweetService,
  ) {}
  public async getTweetByHashtag(hashtag: string): Promise<TweetDto> {
    const mockTweetDto = {
      twitterId: 1234,
      body: `this is a tweet with a #${hashtag}`,
      hashtags: [{ hashtag: { text: hashtag }, searchHashtag: true }],
    };

    return await this.tweetService.saveTweet(mockTweetDto);
  }
}
