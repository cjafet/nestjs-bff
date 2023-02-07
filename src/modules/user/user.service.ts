import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { catchError, map } from 'rxjs';
import userJson from '../../api/mocks/user.json';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpService) {}

  async findUserByEmail(email: string): Promise<User> {
    const { users } = userJson;
    return users.find((user) => user.email === email);
  }

  async findById(userId: number): Promise<User> {
    const { users } = userJson;
    console.log(userId);

    return users.find((user) => user.userId === userId);
  }

  async findUserById(userId) {
    return this.http
      .get('http://localhost:3000/users/' + userId)
      .pipe(map((response) => response.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
