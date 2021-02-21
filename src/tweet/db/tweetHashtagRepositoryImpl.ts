import { Repository } from 'typeorm';
import { TweetHashtagEntity } from './tweetHashtag.entity';
import { TweetHashtagRepository } from './tweetHashtagRepository';

export class TweetHashtagRepositoryImpl
  extends Repository<TweetHashtagEntity>
  implements TweetHashtagRepository {}
