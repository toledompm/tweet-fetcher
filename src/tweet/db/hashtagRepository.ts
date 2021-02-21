import { HashtagDto } from '../hashtagDto';
import { Hashtag } from './hashtag.entity';

export interface HashtagRepository {
  save(hashtag: HashtagDto): Promise<Hashtag>;
}
