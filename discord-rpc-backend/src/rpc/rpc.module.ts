import { Module } from '@nestjs/common';
import { RpcService } from './rpc.service';
import { RpcController } from './rpc.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [RpcController],
  providers: [RpcService, PrismaService, DatabaseService],
})
export class RpcModule {}
