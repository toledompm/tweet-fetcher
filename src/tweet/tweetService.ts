import { TweetDto } from './tweetDto';

export interface TweetService {
  saveTweet(tweet: TweetDto): Promise<TweetDto>;
}
