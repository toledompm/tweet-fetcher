import { TweetRepository } from '../../src/tweet/db/tweetRepository';
import { TweetEntity } from '../../src/tweet/db/tweetEntity';
import { TweetDto } from '../../src/tweet/tweetDto';

export class TweetRepositoryMock implements TweetRepository {
  public async save(tweet: TweetDto): Promise<TweetEntity> {
    return Promise.resolve({
      ...tweet,
      id: 1,
    });
  }
}
