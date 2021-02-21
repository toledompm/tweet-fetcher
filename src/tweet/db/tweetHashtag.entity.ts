import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tweet } from './tweet.entity';
import { Hashtag } from './hashtag.entity';

@Entity({ name: 'tweet_hashtags' })
export class TweetHashtag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'search_hashtag', default: false })
  searchHashtag: boolean;

  @ManyToOne(() => Tweet, (tweet) => tweet.hashtags)
  tweet: Tweet;

  @ManyToOne(() => Hashtag, (hashtag) => hashtag.tweets)
  hashtag: Hashtag;
}
