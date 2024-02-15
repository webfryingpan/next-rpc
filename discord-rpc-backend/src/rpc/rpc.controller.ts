import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { RpcService } from './rpc.service';
import { LaunchDto } from './dtos/launch.dto';

@Controller('rpc')
export class RpcController {
  constructor(private readonly rpcService: RpcService) {}

  @Post('launch')
  @HttpCode(HttpStatus.OK)
  async launch(@Body() body: LaunchDto): Promise<object> {
    try {
      await this.rpcService.launchRpc(body.id);
      return { message: 'Successfuly launched RPC!' };
    } catch (error) {
      throw new HttpException(
        'Failed to launch RPC',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('stop')
  @HttpCode(HttpStatus.OK)
  stop(): object {
    try {
      this.rpcService.stopRpc();
      return { message: 'Successfuly stopped RPC!' };
    } catch (error) {
      throw new HttpException(
        'Failed to stop RPC',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
