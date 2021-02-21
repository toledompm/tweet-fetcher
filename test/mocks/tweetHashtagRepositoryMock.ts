import { TweetHashtagRepository } from '../../src/tweet/db/tweetHashtagRepository';
import { TweetHashtagEntity } from '../../src/tweet/db/tweetHashtagEntity';
import { TweetHashtagDto } from '../../src/tweet/tweetHashtagDto';

export class TweetHashtagRepositoryMock implements TweetHashtagRepository {
  public async save(
    tweetHashtag: TweetHashtagDto,
  ): Promise<TweetHashtagEntity> {
    return Promise.resolve({
      ...tweetHashtag,
      id: 1,
    });
  }
}
