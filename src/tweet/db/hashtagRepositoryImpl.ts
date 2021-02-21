import { Repository } from 'typeorm';
import { Hashtag } from './hashtag.entity';
import { HashtagRepository } from './hashtagRepository';

export class HashtagRepositoryImpl
  extends Repository<Hashtag>
  implements HashtagRepository {}
