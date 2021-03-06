import { Repository, EntityRepository } from 'typeorm';
import { TweetHashtag } from './tweetHashtag.entity';
import { TweetHashtagRepository } from './tweetHashtagRepository';

@EntityRepository(TweetHashtag)
export class TweetHashtagRepositoryImpl
  extends Repository<TweetHashtag>
  implements TweetHashtagRepository {}
