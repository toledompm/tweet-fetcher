import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TweetHashtag } from './tweetHashtag.entity';

@Entity({ name: 'tweets' })
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column({ name: 'twitter_id' })
  twitterId: number;

  @OneToMany(() => TweetHashtag, (tweetHashtag) => tweetHashtag.tweet)
  hashtags?: TweetHashtag[];
}
