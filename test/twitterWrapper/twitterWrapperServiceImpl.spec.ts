import { Test } from '@nestjs/testing';
import { TwitterWrapperService } from '../../src/twitterWrapper/twitterWrapperService';
import { TwitterWrapperServiceImpl } from '../../src/twitterWrapper/twitterWrapperServiceImpl';
import { TweetDto } from '../../src/tweet/tweetDto';
import { TweetServiceMock } from '../mocks/tweetServiceMock';
import {
  TWITTER_WRAPPER_SERVICE,
  TWEET_SERVICE,
} from '../../src/common/consts';

describe('TwitterWrapperServiceImpl', () => {
  let twitterWrapperService: TwitterWrapperService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TWEET_SERVICE,
          useClass: TweetServiceMock,
        },
        {
          provide: TWITTER_WRAPPER_SERVICE,
          useClass: TwitterWrapperServiceImpl,
        },
      ],
    }).compile();

    twitterWrapperService = moduleRef.get<TwitterWrapperService>(
      TWITTER_WRAPPER_SERVICE,
    );

    twitterWrapperService.twitterClient = {
      get: jest.fn().mockReturnValue({
        statuses: [
          {
            body: 'this is a real #tweet with #someHashtag',
            hashtags: [
              { hashtag: { text: 'someHashtag' }, searchHashtag: true },
            ],
            twitterId: '123456',
          },
        ],
      }),
    };
  });

  describe('findTweetByHashtag', () => {
    let tweet: TweetDto;
    const hashtag = 'someHashtag';

    beforeEach(async () => {
      tweet = await twitterWrapperService.getTweetByHashtag(hashtag);
    });

    it('should return a tweet containing the hashtag', async () => {
      expect(tweet).toEqual(
        expect.objectContaining({
          hashtags: [{ hashtag: { text: hashtag }, searchHashtag: true }],
        }),
      );
    });
  });
});
