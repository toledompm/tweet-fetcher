import { TweetHashtagDto } from '../tweetHashtagDto';
import { TweetHashtagEntity } from './tweetHashtagEntity';

export interface TweetHashtagRepository {
  save(tweetHashtag: TweetHashtagDto): Promise<TweetHashtagEntity>;
}
