import { Injectable } from '@nestjs/common';
import { TwitterWrapperService } from './twitterWrapperService';
import { RequestOptionsDto } from '../common/requestOptionsDto';
import { TweetDto } from '../tweet/tweetDto';

@Injectable()
export class TwitterWrapperServiceImpl implements TwitterWrapperService {
  public async getTweetByHashtag(
    hashtag: string,
    options: RequestOptionsDto,
  ): Promise<TweetDto> {
    return Promise.resolve({
      twitterId: 1234,
      body: 'this is a tweet',
      hashtags: [{ hashtag: { text: hashtag }, searchHashtag: true }],
    });
  }
}
