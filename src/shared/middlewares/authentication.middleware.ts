/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { AuthenticationService } from 'src/modules/authentication/authentication.service';
// import { ServerResponse } from 'http';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly authenticationService: AuthenticationService) {}

  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request', req.method, req.headers['host']);
    if (!this.authenticationService.validateUserHeader(req)) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ error: [{
            status: "400",
            title: "Unable to authenticate the user.",
            source: req['protocol'] + "://" + req.headers['host'] + req['path'],
            detail: "Missing the Authorization header."
        }]
      });
    }
    return next();
  }
}
