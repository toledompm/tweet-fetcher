import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './db/tweet.entity';
import { TweetHashtag } from './db/tweetHashtag.entity';
import { Hashtag } from './db/hashtag.entity';
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

const exportedProviders = [
  {
    provide: TWEET_SERVICE,
    useClass: TweetServiceImpl,
  },
];

const providers = [
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

const allProviders = () => {
  return [...providers, ...exportedProviders];
};

@Module({
  imports: [
    TypeOrmModule.forFeature([Tweet, TweetHashtag, Hashtag]),
  ],
  providers: allProviders(),
  exports: allProviders(),
})
export class TweetModule {}
