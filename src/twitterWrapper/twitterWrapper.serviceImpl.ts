import { Injectable } from '@nestjs/common';
import { TwitterWrapperService } from './twitterWrapper.service';
import { RequestOptionsDto } from '../common/requestOptions.dto';
import { TweetDto } from '../common/tweet.dto';

@Injectable()
export class TwitterWrapperServiceImpl implements TwitterWrapperService {
  public async getTweetByHashtag(
    hashtag: string,
    options: RequestOptionsDto,
  ): Promise<TweetDto> {
    return Promise.resolve({
      author: 'test',
      body: 'this is a tweet',
      hashtags: [hashtag],
    });
  }
}
