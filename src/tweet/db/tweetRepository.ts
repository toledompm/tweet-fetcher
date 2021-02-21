import { TweetDto } from '../tweetDto';
import { Tweet } from './tweet.entity';

export interface TweetRepository {
  save(tweet: TweetDto): Promise<Tweet>;
}
