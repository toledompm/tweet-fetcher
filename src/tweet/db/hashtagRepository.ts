import { HashtagDto } from '../hashtagDto';
import { HashtagEntity } from './hashtagEntity';

export interface HashtagRepository {
  save(hashtag: HashtagDto): Promise<HashtagEntity>;
}
