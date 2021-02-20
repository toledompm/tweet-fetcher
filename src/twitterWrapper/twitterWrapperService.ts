import { RequestOptionsDto } from '../common/requestOptionsDto';
import { TweetDto } from '../common/tweetDto';

export interface TwitterWrapperService {
  getTweetByHashtag(
    hashtag: string,
    options: RequestOptionsDto,
  ): Promise<TweetDto>;
}
