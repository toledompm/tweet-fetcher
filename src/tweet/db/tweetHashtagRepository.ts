import { TweetHashtagDto } from './tweetHashtagDto';
import { TweetHashtagEntity } from './db/tweetHashtagEntity';

export interface TweetHashtagRepository {
  save(tweetHashtag: TweetHashtagDto): Promise<TweetHashtagEntity>;
}
