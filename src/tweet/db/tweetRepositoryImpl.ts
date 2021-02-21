import { Repository } from 'typeorm';
import { TweetEntity } from './tweetEntity';
import { TweetRepository } from './tweetRepository';

export class TweetRepositoryImpl
  extends Repository<TweetEntity>
  implements TweetRepository {}
