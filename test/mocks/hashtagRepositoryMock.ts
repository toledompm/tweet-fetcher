import { HashtagRepository } from '../../src/tweet/db/hashtagRepository';
import { Hashtag } from '../../src/tweet/db/hashtag.entity';
import { HashtagDto } from '../../src/tweet/hashtagDto';

export class HashtagRepositoryMock implements HashtagRepository {
  public async save(hashtag: HashtagDto): Promise<Hashtag> {
    return Promise.resolve({
      ...hashtag,
      id: 1,
    });
  }
}
