import { Module } from '@nestjs/common';
import { TwitterModule } from './twitterWrapper/twitterWrapperModule';

@Module({
  imports: [TwitterModule],
})
export class AppModule {}
