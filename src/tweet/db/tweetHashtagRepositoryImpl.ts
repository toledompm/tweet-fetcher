import { Repository } from 'typeorm';
import { TweetHashtagEntity } from './tweetHashtagEntity';
import { TweetHashtagRepository } from './tweetHashtagRepository';

export class TweetHashtagRepositoryImpl
  extends Repository<TweetHashtagEntity>
  implements TweetHashtagRepository {}
