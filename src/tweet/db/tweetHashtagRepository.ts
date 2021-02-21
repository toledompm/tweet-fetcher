import { TweetHashtagDto } from '../tweetHashtagDto';
import { TweetHashtag } from './tweetHashtag.entity';

export interface TweetHashtagRepository {
  save(tweetHashtag: TweetHashtagDto): Promise<TweetHashtag>;
}
