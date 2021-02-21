import { RequestOptionsDto } from '../common/requestOptionsDto';
import { TweetDto } from '../tweet/tweetDto';

export interface TwitterWrapperService {
  getTweetByHashtag(
    hashtag: string,
    options: RequestOptionsDto,
  ): Promise<TweetDto>;
}
