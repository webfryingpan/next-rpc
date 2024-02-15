import { IsNumber } from 'class-validator';

export class LaunchDto {
  @IsNumber()
  readonly id: number;
}
