import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './db/tweet.entity';
import { TweetHashtag } from './db/tweetHashtag.entity';
import { Hashtag } from './db/hashtag.entity';
import { TweetServiceImpl } from './tweetServiceImpl';
import { TWEET_SERVICE } from '../common/consts';

const exportedProviders = [
  {
    provide: TWEET_SERVICE,
    useClass: TweetServiceImpl,
  },
];

const providers = [];

const allProviders = () => {
  return [...providers, ...exportedProviders];
};

@Module({
  imports: [TypeOrmModule.forFeature([Tweet, TweetHashtag, Hashtag])],
  providers: allProviders(),
  exports: allProviders(),
})
export class TweetModule {}
