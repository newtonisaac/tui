import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class DestinationDto {
  @IsString()
  id: string;
  
  @IsString()
  @IsNotEmpty()
  City: string;
  
  @IsString()
  @IsNotEmpty()
  CountryCode: string;
  
  @IsString()
  @IsNotEmpty()
  IATACode: string;
  
  @IsString()
  @IsNotEmpty()
  AccuLocationKey?: string;

}