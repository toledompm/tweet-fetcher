import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TweetHashtag } from './tweetHashtag.entity';

@Entity({ name: 'hashtags' })
export class Hashtag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToMany(() => TweetHashtag, (tweetHashtag) => tweetHashtag.hashtag)
  tweets?: TweetHashtag[];
}
