import { Controller, Post, Param, Body, Inject } from '@nestjs/common';
import { TwitterWrapperService } from './twitterWrapper.service';
import { TweetDto } from '../common/tweet.dto';
import { RequestOptionsDto } from '../common/requestOptions.dto';
import { TWITTER_WRAPPER_SERVICE } from '../common/consts';

@Controller('tweet')
export class TwitterWrapperController {
  constructor(
    @Inject(TWITTER_WRAPPER_SERVICE)
    private twitterWrapperService: TwitterWrapperService,
  ) {}

  @Post(':hashtag')
  public async findTweetsByHashtag(
    @Param('hashtag') hashtag: string,
    @Body() requestOptions: RequestOptionsDto,
  ): Promise<TweetDto> {
    return await this.twitterWrapperService.getTweetByHashtag(
      hashtag,
      requestOptions,
    );
  }
}
