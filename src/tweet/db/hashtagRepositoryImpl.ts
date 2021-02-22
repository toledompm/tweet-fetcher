import { Repository, EntityRepository } from 'typeorm';
import { Hashtag } from './hashtag.entity';
import { HashtagRepository } from './hashtagRepository';

@EntityRepository(Hashtag)
export class HashtagRepositoryImpl
  extends Repository<Hashtag>
  implements HashtagRepository {}
