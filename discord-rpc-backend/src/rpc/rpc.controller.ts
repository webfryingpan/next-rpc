import { Controller, Post, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { RpcService } from './rpc.service';
import { ParamDto } from './dtos/param.dto';

@Controller('rpc')
export class RpcController {
  constructor(private readonly rpcService: RpcService) {}

  @Post(':id')
  @HttpCode(HttpStatus.OK)
  async launch(@Param() params: ParamDto): Promise<void> {
    await this.rpcService.launch(parseInt(params.id));
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  stop(): void {
    this.rpcService.stop();
  }
}
