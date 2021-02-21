import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetEntity } from './db/tweetEntity';
import { TweetHashtagEntity } from './db/tweetHashtagEntity';
import { HashtagEntity } from './db/hashtagEntity';
import { TweetServiceImpl } from './tweetServiceImpl';
import { TweetRepositoryImpl } from './db/tweetRepositoryImpl';
import { HashtagRepositoryImpl } from './db/hashtagRepositoryImpl';
import { TweetHashtagRepositoryImpl } from './db/tweetHashtagRepositoryImpl';
import {
  TWEET_SERVICE,
  TWEET_REPOSITORY,
  HASHTAG_REPOSITORY,
  TWEET_HASHTAG_REPOSITORY,
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
  {
    provide: TWEET_HASHTAG_REPOSITORY,
    useClass: TweetHashtagRepositoryImpl,
  },
];

@Module({
  imports: [
    TypeOrmModule.forFeature([TweetEntity, TweetHashtagEntity, HashtagEntity]),
  ],
  providers,
})
export class TweetModule {}
