import { TweetService } from '../../src/tweet/tweetService';
import { TweetDto } from '../../src/tweet/tweetDto';

export class TweetServiceMock implements TweetService {
  public saveTweet(tweetDto: TweetDto): Promise<TweetDto> {
    return Promise.resolve(tweetDto);
  }
}
