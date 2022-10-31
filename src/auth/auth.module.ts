import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
