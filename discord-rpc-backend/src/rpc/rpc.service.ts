import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
  LoggerService,
} from '@nestjs/common';
import { Client } from '@xhayper/discord-rpc';
import { DatabaseService } from 'src/database/database.service';
import { PresetDto } from 'src/database/dtos/preset.dto';

@Injectable()
export class RpcService implements OnModuleInit, OnModuleDestroy {
  private readonly logger: LoggerService = new Logger(RpcService.name);
  private rpc: Client;

  constructor(private readonly databaseService: DatabaseService) {}

  onModuleInit() {
    this.rpc = new Client({ clientId: '' });
    this.rpc.on('ready', () => {
      this.logger.log('RPC Client is ready');
    });
  }

  onModuleDestroy() {
    this.rpc.destroy();
  }

  async launchRpc(presetId: number): Promise<void> {
    const data: PresetDto = await this.databaseService.fetchById(presetId);

    this.rpc.clientId = data.clientId;

    await this.rpc.login();

    const activity = {
      state: data.state,
      details: data.details,
      largeImageKey: data.largeImageKey,
      largeImageText: data.largeImageText,
      smallImageKey: data.smallImageKey,
      smallImageText: data.smallImageText,
      buttons: [
        { label: data.buttonOneLabel, url: data.buttonOneUrl },
        { label: data.buttonTwoLabel, url: data.buttonTwoUrl },
      ],
      type: data.activityType,
    };

    this.rpc.user.setActivity(activity);
  }

  stopRpc(): void {
    this.rpc.destroy();
  }
}
