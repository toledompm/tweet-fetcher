import { IsString } from 'class-validator';

export class HashtagDto {
  @IsString()
  readonly text: string;
}
