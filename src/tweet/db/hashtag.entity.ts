import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TweetHashtagEntity } from './tweetHashtag.entity';

@Entity({ name: 'hashtags' })
export class HashtagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToMany(() => TweetHashtagEntity, (tweetHashtag) => tweetHashtag.hashtag)
  tweets?: TweetHashtagEntity[];
}
