import { Module } from '@nestjs/common';
import { TwitterWrapperController } from './twitterWrapper.controller';
import { TwitterWrapperService } from './twitterWrapper.service';

@Module({
  imports: [],
  providers: [TwitterWrapperService],
  controllers: [TwitterWrapperController],
})
export class TwitterModule {}
