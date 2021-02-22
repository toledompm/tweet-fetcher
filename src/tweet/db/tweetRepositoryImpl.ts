import { Repository, EntityRepository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { TweetRepository } from './tweetRepository';

@EntityRepository(Tweet)
export class TweetRepositoryImpl
  extends Repository<Tweet>
  implements TweetRepository {}
