import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

const passwordRegex = /^[a-zA-Z0-9]+$/;
export class LoginDto {
  @Matches(passwordRegex)
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  identifier: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;
}
