import { Injectable, Inject } from '@nestjs/common';
import { TweetService } from './tweetService';
import { TweetDto } from './tweetDto';
import { TweetEntity } from './db/tweetEntity';
import { TweetHashtagEntity } from './db/tweetHashtagEntity';
import { HashtagEntity } from './db/hashtagEntity';
import { TweetRepository } from './db/tweetRepository';
import { TweetHashtagRepository } from './db/tweetHashtagRepository';
import { HashtagRepository } from './db/hashtagRepository';
import {
  TWEET_REPOSITORY,
  HASHTAG_REPOSITORY,
  TWEET_HASHTAG_REPOSITORY,
} from '../common/consts';

@Injectable()
export class TweetServiceImpl implements TweetService {
  constructor(
    @Inject(TWEET_REPOSITORY)
    private tweetRepository: TweetRepository,
    @Inject(HASHTAG_REPOSITORY)
    private hashtagRepository: HashtagRepository,
    @Inject(TWEET_HASHTAG_REPOSITORY)
    private tweetHashtagRepository: TweetHashtagRepository,
  ) {}

  public async saveTweet(tweetDto: TweetDto): Promise<TweetDto> {
    const searchHashtags = tweetDto.hashtags.filter((tweetHashtag) => {
      tweetHashtag.searchHashtag;
    });
    const searchHashtagsText = searchHashtags.map(
      (tweetHashtag) => tweetHashtag.hashtag.text,
    );

    const tweet = await this.tweetRepository.save(tweetDto);
    const hashtags = await this.saveHashtags(tweetDto.body);
    const tweethashtags = await this.saveTweetHashtags(
      hashtags,
      tweet,
      searchHashtagsText,
    );

    const dtoHashtags = tweethashtags.map((tweetHashtag) => {
      return {
        text: tweetHashtag.hashtag.text,
        searchHashtag: tweetHashtag.searchHashtag,
      };
    });

    return Promise.resolve({
      ...tweetDto,
      hashtags: dtoHashtags,
    });
  }

  private async saveHashtags(tweetBody: string): Promise<HashtagEntity[]> {
    const hashtagTexts = tweetBody.match(/#[a-z0-9_]+/g);

    const hashtagEntities = hashtagTexts.map(async (text) => {
      return this.hashtagRepository.save({ text });
    });

    return await Promise.all(hashtagEntities);
  }

  private async saveTweetHashtags(
    hashtags: HashtagEntity[],
    tweet: TweetEntity,
    searchHashtagsText: string[],
  ): Promise<TweetHashtagEntity[]> {
    const tweetHashtags = hashtags.map(async (hashtag) => {
      const isSearchHashtag = searchHashtagsText.includes(hashtag.text);
      return this.tweetHashtagRepository.save({
        tweet: tweet,
        hashtag: hashtag,
        searchHashtag: isSearchHashtag,
      });
    });

    return Promise.all(tweetHashtags);
  }
}
