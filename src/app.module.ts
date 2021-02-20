import { Module } from '@nestjs/common';
import { TwitterModule } from './twitterWrapper/twitterWrapper.module';

@Module({
  imports: [TwitterModule],
})
export class AppModule {}
