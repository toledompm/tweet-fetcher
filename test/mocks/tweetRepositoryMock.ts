import { TweetRepository } from '../../src/tweet/db/tweetRepository';
import { TweetEntity } from '../../src/tweet/db/tweet.entity';
import { TweetHashtagEntity } from '../../src/tweet/db/tweetHashtag.entity';
import { TweetDto } from '../../src/tweet/tweetDto';
import { TweetHashtagDto } from '../../src/tweet/tweetHashtagDto';

export class TweetRepositoryMock implements TweetRepository {
  public async save(tweet: TweetDto): Promise<TweetEntity> {
    return Promise.resolve({
      ...tweet,
      id: 1,
      hashtags: tweet.hashtags.map((dto) => this.dtoToEntity(dto)),
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private dtoToEntity(dto: TweetHashtagDto): TweetHashtagEntity {
    return new TweetHashtagEntity();
  }
}
