import { TweetDto } from './tweetDto';
import { TweetEntity } from './db/tweetEntity';

export interface TweetRepository {
  save(tweet: TweetDto): Promise<TweetEntity>;
}
