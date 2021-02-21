import { TweetHashtagRepository } from '../../src/tweet/db/tweetHashtagRepository';
import { TweetHashtag } from '../../src/tweet/db/tweetHashtag.entity';
import { TweetHashtagDto } from '../../src/tweet/tweetHashtagDto';

export class TweetHashtagRepositoryMock implements TweetHashtagRepository {
  public async save(
    tweetHashtag: TweetHashtagDto,
  ): Promise<TweetHashtag> {
    return Promise.resolve(new TweetHashtag());
  }
}
