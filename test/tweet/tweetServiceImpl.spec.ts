import { Test } from '@nestjs/testing';
import { TweetService } from '../../src/tweet/tweetService';
import { TweetRepository } from '../../src/tweet/db/tweetRepository';
import { TweetHashtagRepository } from '../../src/tweet/db/tweetHashtagRepository';
import { HashtagRepository } from '../../src/tweet/db/hashtagRepository';
import { TweetServiceImpl } from '../../src/tweet/tweetServiceImpl';
import { TweetDto } from '../../src/tweet/tweetDto';
import {
  TWEET_SERVICE,
  TWEET_REPOSITORY,
  HASHTAG_REPOSITORY,
  TWEET_HASHTAG_REPOSITORY,
} from '../../src/common/consts';
import { TweetRepositoryMock } from '../mocks/tweetRepositoryMock';
import { TweetHashtagRepositoryMock } from '../mocks/tweetHashtagRepositoryMock';
import { HashtagRepositoryMock } from '../mocks/hashtagRepositoryMock';

describe('TweetServiceImpl', () => {
  let tweetService: TweetService;
  let tweetRepository: TweetRepository;
  let tweetHashtagRepository: TweetHashtagRepository;
  let hashtagRepository: HashtagRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TWEET_SERVICE,
          useClass: TweetServiceImpl,
        },
        {
          provide: TWEET_REPOSITORY,
          useClass: TweetRepositoryMock,
        },
        {
          provide: HASHTAG_REPOSITORY,
          useClass: TweetHashtagRepositoryMock,
        },
        {
          provide: TWEET_HASHTAG_REPOSITORY,
          useClass: HashtagRepositoryMock,
        },
      ],
    }).compile();

    tweetService = moduleRef.get<TweetService>(TWEET_SERVICE);
    tweetRepository = moduleRef.get<TweetRepository>(TWEET_REPOSITORY);
    tweetHashtagRepository = moduleRef.get<TweetHashtagRepository>(
      HASHTAG_REPOSITORY,
    );
    hashtagRepository = moduleRef.get<HashtagRepository>(
      TWEET_HASHTAG_REPOSITORY,
    );

    tweetRepository.save = jest.fn(tweetRepository.save);
    tweetHashtagRepository.save = jest.fn(tweetHashtagRepository.save);
    hashtagRepository.save = jest.fn(hashtagRepository.save);
  });

  describe('save tweet with hashtags', () => {
    let resultTweetDto: TweetDto;
    const hashtag = { text: '#hashtags' };
    const tweetHashtagDto = { hashtag, searchHashtag: true };
    const tweetDto = {
      body: 'This is a #tweet with 2 #hashtags',
      twitterId: 123456789,
      hashtags: [tweetHashtagDto],
    };
    const numberOfHashtags = 2;

    beforeEach(async () => {
      resultTweetDto = await tweetService.saveTweet(tweetDto);
    });

    it('should save the tweet', () => {
      expect(tweetRepository.save).toHaveBeenCalledWith(tweetDto);
    });

    it(`should save ${numberOfHashtags} hashtags`, () => {
      expect(hashtagRepository.save).toHaveBeenCalledTimes(numberOfHashtags);
    });

    it(`should save ${numberOfHashtags} tweetHashtag relation`, () => {
      expect(tweetHashtagRepository.save).toHaveBeenCalledTimes(
        numberOfHashtags,
      );
    });

    it(`should return the tweetDto with ${numberOfHashtags} relations`, () => {
      expect(resultTweetDto.hashtags.length).toBe(numberOfHashtags);
    });
  });
});
