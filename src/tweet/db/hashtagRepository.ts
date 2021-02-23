import { HashtagDto } from '../hashtagDto';
import { Hashtag } from './hashtag.entity';

export interface HashtagRepository {
  save(hashtag: HashtagDto): Promise<Hashtag>;
  findOne(partial: Partial<HashtagDto>): Promise<Hashtag>;
}
