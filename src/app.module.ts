import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterModule } from './twitterWrapper/twitterWrapperModule';
import { TweetModule } from './tweet/tweetModule';

@Module({
  imports: [TypeOrmModule.forRoot(), TwitterModule, TweetModule],
})
export class AppModule {}
