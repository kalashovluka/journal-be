import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JournalController } from './modules/journal/controllers/journal.controller';
import { JournalService } from './modules/journal/services/journal.service';
import { PrismaService } from './modules/prisma/services/prisma.service';
import { UserService } from './modules/user/services/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './modules/auth/controllers/auth.controller';
import { AuthService } from './modules/auth/services/auth.service';
import { LocalStrategy } from './modules/auth/strategies/local.strategy';

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
  controllers: [AuthController, JournalController],
  providers: [
    PrismaService,
    JournalService,
    AuthService,
    UserService,
    LocalStrategy,
  ],
})
export class AppModule {}
