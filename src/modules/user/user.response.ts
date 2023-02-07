import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty()
  public userId: number;

  @ApiProperty()
  public userName: string;

  @ApiProperty()
  public email: string;
}
