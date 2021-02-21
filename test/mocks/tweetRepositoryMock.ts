import { TweetRepository } from '../../src/tweet/db/tweetRepository';
import { Tweet } from '../../src/tweet/db/tweet.entity';
import { TweetHashtag } from '../../src/tweet/db/tweetHashtag.entity';
import { TweetDto } from '../../src/tweet/tweetDto';
import { TweetHashtagDto } from '../../src/tweet/tweetHashtagDto';

export class TweetRepositoryMock implements TweetRepository {
  public async save(tweet: TweetDto): Promise<Tweet> {
    return Promise.resolve({
      ...tweet,
      id: 1,
      hashtags: tweet.hashtags.map((dto) => this.dtoTo(dto)),
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private dtoTo(dto: TweetHashtagDto): TweetHashtag {
    return new TweetHashtag();
  }
}
