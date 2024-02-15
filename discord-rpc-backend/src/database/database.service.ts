import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PresetDto } from './dtos/preset.dto';

@Injectable()
export class DatabaseService {
  constructor(private prisma: PrismaService) {}

  async savePreset(obj: PresetDto): Promise<void> {
    const data = {
      clientId: obj.clientId,
      state: obj.state,
      details: obj.details,
      largeImageKey: obj.largeImageText,
      largeImageText: obj.largeImageText,
      smallImageKey: obj.smallImageKey,
      smallImageText: obj.smallImageText,
      buttonOneLabel: obj.buttonOneLabel,
      buttonOneUrl: obj.buttonOneUrl,
      buttonTwoLabel: obj.buttonTwoLabel,
      buttonTwoUrl: obj.buttonTwoUrl,
      activityType: obj.activityType,
    };

    await this.prisma.presets.create({ data });
  }

  async fetchById(id: number): Promise<PresetDto> {
    return await this.prisma.presets.findFirst({
      where: { id },
    });
  }

  async fetchAll(): Promise<PresetDto[]> {
    return await this.prisma.presets.findMany();
  }

  async deleteById(id: number): Promise<void> {
    await this.prisma.presets.delete({ where: { id } });
  }
}
