import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetEntity } from './db/tweetEntity';
import { TweetServiceImpl } from './tweetServiceImpl';
import { TweetRepositoryImpl } from './db/tweetRepositoryImpl';
import { HashtagRepositoryImpl } from './db/hashtagRepositoryImpl';
import {
  TWEET_SERVICE,
  TWEET_REPOSITORY,
  HASHTAG_REPOSITORY,
} from '../common/consts';

const providers = [
  {
    provide: TWEET_SERVICE,
    useClass: TweetServiceImpl,
  },
  {
    provide: TWEET_REPOSITORY,
    useClass: TweetRepositoryImpl,
  },
  {
    provide: HASHTAG_REPOSITORY,
    useClass: HashtagRepositoryImpl,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([TweetEntity])],
  providers,
})
export class TweetModule {}
