import { TweetDto } from '../tweetDto';
import { TweetEntity } from './tweet.entity';

export interface TweetRepository {
  save(tweet: TweetDto): Promise<TweetEntity>;
}
