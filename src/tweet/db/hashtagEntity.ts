import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TweethashtagEntity } from './hashtagEntity';

@Entity({ name: 'hashtags' })
export class HashtagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToMany(() => TweethashtagEntity, (tweetHashtag) => tweetHashtag.hashtag)
  tweets?: TweethashtagEntity[];
}
