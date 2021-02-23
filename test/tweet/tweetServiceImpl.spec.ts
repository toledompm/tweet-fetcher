import { Test } from '@nestjs/testing';
import { TweetService } from '../../src/tweet/tweetService';
import { TweetServiceImpl } from '../../src/tweet/tweetServiceImpl';
import { TweetDto } from '../../src/tweet/tweetDto';
import { TWEET_SERVICE } from '../../src/common/consts';
import {
  repositoryMockFactory,
  MockType,
} from '../mocks/repositoryMockFactory';
import { Tweet } from '../../src/tweet/db/tweet.entity';
import { Hashtag } from '../../src/tweet/db/hashtag.entity';
import { TweetHashtag } from '../../src/tweet/db/tweetHashtag.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TweetServiceImpl', () => {
  let tweetService: TweetService;
  let tweetRepository: MockType<Repository<Tweet>>;
  let tweetHashtagRepository: MockType<Repository<Hashtag>>;
  let hashtagRepository: MockType<Repository<TweetHashtag>>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TWEET_SERVICE,
          useClass: TweetServiceImpl,
        },
        {
          provide: getRepositoryToken(Tweet),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Hashtag),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(TweetHashtag),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    tweetService = moduleRef.get<TweetService>(TWEET_SERVICE);
    tweetRepository = moduleRef.get(getRepositoryToken(Tweet));
    tweetHashtagRepository = moduleRef.get(getRepositoryToken(Hashtag));
    hashtagRepository = moduleRef.get(getRepositoryToken(TweetHashtag));

    tweetRepository.save = jest.fn().mockImplementation(async (tweet) => {
      return Promise.resolve({
        ...tweet,
        id: 1,
        hashtags: tweet.hashtags.map(() => new TweetHashtag()),
      });
    });

    tweetHashtagRepository.save = jest.fn().mockImplementation(async () => {
      return Promise.resolve(new TweetHashtag());
    });

    hashtagRepository.save = jest.fn().mockImplementation(async (hashtag) => {
      return Promise.resolve({
        ...hashtag,
        id: 1,
      });
    });
  });

  describe('save tweet with hashtags', () => {
    let resultTweetDto: TweetDto;

    const NUMBER_OF_HASHTAGS = 2;

    const hashtag = { text: '#hashtags' };
    const tweetHashtagDto = { hashtag, searchHashtag: true };
    const tweetDto = {
      body: 'This is a #tweet with 2 #hashtags',
      twitterId: '123456789',
      hashtags: [tweetHashtagDto],
    };

    beforeEach(async () => {
      resultTweetDto = await tweetService.saveTweet(tweetDto);
    });

    it('should save the tweet', () => {
      expect(tweetRepository.save).toHaveBeenCalledWith(tweetDto);
    });

    it(`should save ${NUMBER_OF_HASHTAGS} hashtags`, () => {
      expect(hashtagRepository.save).toHaveBeenCalledTimes(NUMBER_OF_HASHTAGS);
    });

    it(`should save ${NUMBER_OF_HASHTAGS} tweetHashtag relation`, () => {
      expect(tweetHashtagRepository.save).toHaveBeenCalledTimes(
        NUMBER_OF_HASHTAGS,
      );
    });

    it(`should return the tweetDto with ${NUMBER_OF_HASHTAGS} relations`, () => {
      expect(resultTweetDto.hashtags.length).toBe(NUMBER_OF_HASHTAGS);
    });
  });
});
