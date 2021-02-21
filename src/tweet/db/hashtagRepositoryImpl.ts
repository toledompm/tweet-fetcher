import { Repository } from 'typeorm';
import { HashtagEntity } from './hashtagEntity';
import { HashtagRepository } from './hashtagRepository';

export class HashtagRepositoryImpl
  extends Repository<HashtagEntity>
  implements HashtagRepository {}
