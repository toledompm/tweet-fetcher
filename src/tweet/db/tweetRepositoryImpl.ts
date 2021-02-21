import { Repository, Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { TweetRepository } from './tweetRepository';

@Repository(Tweet)
export class TweetRepositoryImpl
  extends Repository<Tweet>
  implements TweetRepository {}
