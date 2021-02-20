import { Test } from '@nestjs/testing';
import { TwitterWrapperService } from '../../src/twitterWrapper/twitterWrapperService';
import { TwitterWrapperServiceImpl } from '../../src/twitterWrapper/twitterWrapperServiceImpl';
import { TweetDto } from '../../src/common/tweetDto';
import { RequestOptionsDto } from '../../src/common/requestOptionsDto';
import { TWITTER_WRAPPER_SERVICE } from '../../src/common/consts';

describe('TwitterWrapperServiceImpl', () => {
  let twitterWrapperService: TwitterWrapperService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TWITTER_WRAPPER_SERVICE,
          useClass: TwitterWrapperServiceImpl,
        },
      ],
    }).compile();

    twitterWrapperService = moduleRef.get<TwitterWrapperService>(
      TWITTER_WRAPPER_SERVICE,
    );
  });

  describe('findTweetByHashtag', () => {
    let tweet: TweetDto;
    const hashtag = 'someHashtag';

    beforeEach(async () => {
      tweet = await twitterWrapperService.getTweetByHashtag(
        hashtag,
        new RequestOptionsDto(),
      );
    });

    it('should return a tweet containing the hashtag', async () => {
      expect(tweet).toEqual(
        expect.objectContaining({
          hashtags: [hashtag],
        }),
      );
    });
  });
});
