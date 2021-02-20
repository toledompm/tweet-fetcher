import { Module } from '@nestjs/common';
import { TwitterWrapperController } from './twitterWrapperController';
import { TwitterWrapperServiceImpl } from './twitterWrapperServiceImpl';
import { TWITTER_WRAPPER_SERVICE } from '../common/consts';

@Module({
  imports: [],
  providers: [
    {
      provide: TWITTER_WRAPPER_SERVICE,
      useClass: TwitterWrapperServiceImpl,
    },
  ],
  controllers: [TwitterWrapperController],
})
export class TwitterModule {}
