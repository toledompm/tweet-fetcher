import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TweethashtagEntity } from './hashtagEntity';

@Entity({ name: 'tweets' })
export class TweetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column({ name: 'twitter_id' })
  twitterId: number;

  @OneToMany(() => TweethashtagEntity, (tweetHashtag) => tweetHashtag.tweet)
  hashtags?: TweethashtagEntity[];
}
