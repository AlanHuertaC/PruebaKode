import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

const passwordRegex = /^[a-zA-Z0-9]+$/;

export class UpdateUserDto {

  @Matches(passwordRegex)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(40)
  name?: string;

  @Matches(passwordRegex)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(40)
  fatherLastName?: string

  @Matches(passwordRegex)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(40)
  motherLastName?: string

  @Matches(passwordRegex)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(10)
  phone?: string

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(40)
  email?: string;

  @Matches(passwordRegex)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(30)
  userName?: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(8)
  @MaxLength(20)
  password?: string

}
