import { Module } from '@nestjs/common';
import { TwitterWrapperController } from './twitterWrapper.controller';
import { TwitterWrapperServiceImpl } from './twitterWrapper.serviceImpl';
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
