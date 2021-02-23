import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { TweetService } from './tweetService';
import { TweetDto } from './tweetDto';
import { Tweet } from './db/tweet.entity';
import { TweetHashtag } from './db/tweetHashtag.entity';
import { Hashtag } from './db/hashtag.entity';
import { TweetRepository } from './db/tweetRepository';
import { TweetHashtagRepository } from './db/tweetHashtagRepository';
import { HashtagRepository } from './db/hashtagRepository';

@Injectable()
export class TweetServiceImpl implements TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: TweetRepository,
    @InjectRepository(Hashtag)
    private readonly hashtagRepository: HashtagRepository,
    @InjectRepository(TweetHashtag)
    private readonly tweetHashtagRepository: TweetHashtagRepository,
  ) {}

  public async saveTweet(tweetDto: TweetDto): Promise<TweetDto> {
    const searchHashtags = tweetDto.hashtags.filter((tweetHashtag) => {
      tweetHashtag.searchHashtag;
    });
    const searchHashtagsText = searchHashtags.map(
      (tweetHashtag) => tweetHashtag.hashtag.text,
    );

    try {
      const tweet = await this.tweetRepository.save(tweetDto);
      const hashtags = await this.findOrSaveHashtags(tweetDto.body);
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
    } catch (error) {
      console.log(tweetDto);
      console.log(error);
      throw new Error('Failed to save Entities');
    }
  }

  private async findOrSaveHashtags(tweetBody: string): Promise<Hashtag[]> {
    const hashtagTexts = tweetBody.match(/#[A-z0-9_]+/g);

    const hashtagEntities = hashtagTexts.map(
      async (text): Promise<Hashtag> => {
        const hashtagResponse = await this.hashtagRepository.findOne({ text });
        if (hashtagResponse) return hashtagResponse;

        return this.hashtagRepository.save({ text });
      },
    );

    return Promise.all(hashtagEntities);
  }

  private async saveTweetHashtags(
    hashtags: Hashtag[],
    tweet: Tweet,
    searchHashtagsText: string[],
  ): Promise<TweetHashtag[]> {
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
