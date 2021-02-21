import { Repository } from 'typeorm';
import { TweetEntity } from './tweet.entity';
import { TweetRepository } from './tweetRepository';

export class TweetRepositoryImpl
  extends Repository<TweetEntity>
  implements TweetRepository {}
