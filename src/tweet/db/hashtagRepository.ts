import { HashtagDto } from '../hashtagDto';
import { HashtagEntity } from './hashtag.entity';

export interface HashtagRepository {
  save(hashtag: HashtagDto): Promise<HashtagEntity>;
}
