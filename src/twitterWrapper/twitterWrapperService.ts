import { TweetDto } from '../tweet/tweetDto';

export interface TwitterWrapperService {
  getTweetByHashtag(hashtag: string): Promise<TweetDto>;
  twitterClient: any;
}
