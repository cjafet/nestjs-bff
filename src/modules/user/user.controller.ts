import { Controller, Get, Param } from '@nestjs/common';
import { ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './interfaces/user.interface';
import { UserResponse } from './user.response';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  private users: User[];

  constructor(private readonly userService: UserService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onModuleInit() {}

  @Get(':id')
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'The user was successfully found',
    type: UserResponse,
  })
  getById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(parseInt(id));
  }
}
