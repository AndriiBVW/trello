import { IsArray, IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsString({ each: true })
  @IsArray()
  ids: string[];
}
