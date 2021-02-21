import { HashtagRepository } from '../../src/tweet/db/hashtagRepository';
import { HashtagEntity } from '../../src/tweet/db/hashtag.entity';
import { HashtagDto } from '../../src/tweet/hashtagDto';

export class HashtagRepositoryMock implements HashtagRepository {
  public async save(hashtag: HashtagDto): Promise<HashtagEntity> {
    return Promise.resolve({
      ...hashtag,
      id: 1,
    });
  }
}
