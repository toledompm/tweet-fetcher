import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TweetHashtagEntity } from './tweetHashtagEntity';

@Entity({ name: 'tweets' })
export class TweetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column({ name: 'twitter_id' })
  twitterId: number;

  @OneToMany(() => TweetHashtagEntity, (tweetHashtag) => tweetHashtag.tweet)
  hashtags?: TweetHashtagEntity[];
}
