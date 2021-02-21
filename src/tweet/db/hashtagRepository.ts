import { HashtagDto } from './hashtagDto';
import { HashtagEntity } from './db/hashtagEntity';

export interface HashtagRepository {
  save(hashtag: HashtagDto): Promise<HashtagEntity>;
}
