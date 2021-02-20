import { Controller, Post, Param, Body } from '@nestjs/common';
import { TwitterWrapperService } from './twitterWrapper.service';
import { TweetDto } from '../common/tweet.dto';
import { RequestOptionsDto } from '../common/requestOptions.dto';

@Controller('tweet')
export class TwitterWrapperController {
  constructor(private twitterWrapperService: TwitterWrapperService) {}

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
