/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, Inject } from '@nestjs/common';
import { TwitterWrapperService } from './twitterWrapperService';
import { TweetDto } from '../tweet/tweetDto';
import { TweetService } from '../tweet/tweetService';
import { TWEET_SERVICE } from '../common/consts';
import * as Twitter from 'twitter';

@Injectable()
export class TwitterWrapperServiceImpl implements TwitterWrapperService {
  constructor(
    @Inject(TWEET_SERVICE) private readonly tweetService: TweetService,
  ) {
    this.twitterClient = new Twitter({
      consumer_key: process.env.TWITTER_API_KEY,
      consumer_secret: process.env.TWITTER_API_KEY_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
  }
  public twitterClient: Twitter;

  public async getTweetByHashtag(hashtag: string): Promise<TweetDto> {
    const tweet = await this.sendRequest(hashtag);
    return await this.tweetService.saveTweet(tweet);
  }

  private async sendRequest(hashtag: string): Promise<TweetDto> {
    try {
      const response = await this.twitterClient.get('search/tweets', {
        q: `%23${hashtag}`,
        count: 1,
        tweet_mode: 'extended',
      });
      const tweet = response.statuses[0].retweed_status
        ? response.statuses[0].retweed_status
        : response.statuses[0];

      return {
        body: tweet.text ? tweet.text : tweet.full_text,
        twitterId: tweet.id_str,
        hashtags: [{ hashtag: { text: hashtag }, searchHashtag: true }],
      };
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch tweets');
    }
  }
}
