import { Module } from '@nestjs/common';
import { TwitterWrapperController } from './twitterWrapperController';
import { TwitterWrapperServiceImpl } from './twitterWrapperServiceImpl';
import { TWITTER_WRAPPER_SERVICE } from '../common/consts';
import { TweetModule } from '../tweet/tweetModule';

@Module({
  imports: [TweetModule],
  providers: [
    {
      provide: TWITTER_WRAPPER_SERVICE,
      useClass: TwitterWrapperServiceImpl,
    },
  ],
  controllers: [TwitterWrapperController],
})
export class TwitterModule {}
