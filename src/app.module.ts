import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { AuthenticationMiddleware } from './shared/middlewares/authentication.middleware';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: '/', method: RequestMethod.ALL }, UserController);
  }
}
