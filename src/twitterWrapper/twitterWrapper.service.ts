import { RequestOptionsDto } from '../common/requestOptions.dto';
import { TweetDto } from '../common/tweet.dto';

export interface TwitterWrapperService {
  getTweetByHashtag(
    hashtag: string,
    options: RequestOptionsDto,
  ): Promise<TweetDto>;
}
