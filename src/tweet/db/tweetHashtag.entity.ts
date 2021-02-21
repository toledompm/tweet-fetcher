import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TweetEntity } from './tweet.entity';
import { HashtagEntity } from './hashtag.entity';

@Entity({ name: 'tweet_hashtags' })
export class TweetHashtagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'search_hashtag', default: false })
  searchHashtag: boolean;

  @ManyToOne(() => TweetEntity, (tweet) => tweet.hashtags)
  tweet: TweetEntity;

  @ManyToOne(() => HashtagEntity, (hashtag) => hashtag.tweets)
  hashtag: HashtagEntity;
}
