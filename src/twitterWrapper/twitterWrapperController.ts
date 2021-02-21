import { Controller, Get, Param, Inject } from '@nestjs/common';
import { TwitterWrapperService } from './twitterWrapperService';
import { TweetDto } from '../tweet/tweetDto';
import { TWITTER_WRAPPER_SERVICE } from '../common/consts';

@Controller('tweet')
export class TwitterWrapperController {
  constructor(
    @Inject(TWITTER_WRAPPER_SERVICE)
    private twitterWrapperService: TwitterWrapperService,
  ) {}

  @Get(':hashtag')
  public async findTweetsByHashtag(
    @Param('hashtag') hashtag: string,
  ): Promise<TweetDto> {
    return await this.twitterWrapperService.getTweetByHashtag(hashtag);
  }
}
