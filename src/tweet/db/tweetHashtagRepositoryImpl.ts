import { Repository } from 'typeorm';
import { TweetHashtag } from './tweetHashtag.entity';
import { TweetHashtagRepository } from './tweetHashtagRepository';

export class TweetHashtagRepositoryImpl
  extends Repository<TweetHashtag>
  implements TweetHashtagRepository {}
