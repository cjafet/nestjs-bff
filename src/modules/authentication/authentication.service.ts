import { Injectable } from '@nestjs/common';
import jwtDecode from 'jwt-decode';

@Injectable()
export class AuthenticationService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  validateUserHeader(req: any) {
    console.log('Authorization', req.headers['Authorization']);
    if (
      req.headers['Authorization'] != null ||
      req.headers['Authorization'] != undefined
    ) {
      const token = req.headers.authorization.slice(7);
      const payload = jwtDecode(token);
      console.log(payload);
      return true;
    }
    return false;
  }
}
