import { Module } from '@nestjs/common';
import { AuthController } from './modules/auth/controllers/auth.controller';
import { AuthService } from './modules/auth/services/auth.service';
import { JournalController } from './modules/journal/controllers/journal.controller';
import { JournalService } from './modules/journal/services/journal.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AuthController, JournalController],
  providers: [AuthService, JournalService, PrismaService],
})
export class AppModule {}
