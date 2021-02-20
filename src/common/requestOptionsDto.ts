import { IsNumber, IsDateString, IsOptional } from 'class-validator';

export class RequestOptionsDto {
  @IsOptional()
  @IsNumber()
  readonly numberOfTweets?: number = 1;

  @IsOptional()
  @IsDateString()
  readonly customPeriodStart?: string;

  @IsOptional()
  @IsDateString()
  readonly customPeriodEnd?: string;
}
