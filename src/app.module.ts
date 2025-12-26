import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostsController } from './modules/posts/controllers/posts.controller';
import { PostsService } from './modules/posts/services/posts.service';
import { PrismaService } from './modules/prisma/services/prisma.service';
import { UserService } from './modules/user/services/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './modules/auth/controllers/auth.controller';
import { AuthService } from './modules/auth/services/auth.service';
import { LocalStrategy } from './modules/auth/strategies/local.strategy';
import { JwtStrategy } from './modules/auth/strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '2h' },
      }),
    }),
  ],
  controllers: [AuthController, PostsController],
  providers: [
    PrismaService,
    PostsService,
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AppModule {}
