import { TweetDto } from '../tweetDto';
import { TweetEntity } from './tweetEntity';

export interface TweetRepository {
  save(tweet: TweetDto): Promise<TweetEntity>;
}
