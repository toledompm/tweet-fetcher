import { TweetHashtagRepository } from '../../src/tweet/db/tweetHashtagRepository';
import { TweetHashtagEntity } from '../../src/tweet/db/tweetHashtag.entity';
import { TweetHashtagDto } from '../../src/tweet/tweetHashtagDto';

export class TweetHashtagRepositoryMock implements TweetHashtagRepository {
  public async save(
    tweetHashtag: TweetHashtagDto,
  ): Promise<TweetHashtagEntity> {
    return Promise.resolve(new TweetHashtagEntity());
  }
}
