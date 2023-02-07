import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthenticationService],
  exports: [],
})
export class AuthenticationModule {}
