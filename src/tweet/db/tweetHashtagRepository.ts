import { TweetHashtagDto } from '../tweetHashtagDto';
import { TweetHashtagEntity } from './tweetHashtag.entity';

export interface TweetHashtagRepository {
  save(tweetHashtag: TweetHashtagDto): Promise<TweetHashtagEntity>;
}
