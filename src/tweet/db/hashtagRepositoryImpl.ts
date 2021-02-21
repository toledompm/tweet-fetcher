import { Repository } from 'typeorm';
import { HashtagEntity } from './hashtag.entity';
import { HashtagRepository } from './hashtagRepository';

export class HashtagRepositoryImpl
  extends Repository<HashtagEntity>
  implements HashtagRepository {}
