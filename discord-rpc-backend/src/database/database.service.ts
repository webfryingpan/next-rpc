import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PresetDTO } from "./dto/preset.dto";
import { IDatabaseService } from "./interfaces/database-service.interface";

@Injectable()
export class DatabaseService implements IDatabaseService {
  private readonly logger = new Logger(DatabaseService.name);
  constructor(private prisma: PrismaService) {}

  async savePreset(obj: PresetDTO): Promise<void> {
    this.logger.log(`Saving preset ${JSON.stringify(obj)}...`);
    await this.prisma.presets.create({ data: obj });
  }

  async fetchById(id: number): Promise<PresetDTO> {
    this.logger.log(`Fetching preset with id ${Number(id)}...`);
    return await this.prisma.presets.findFirst({
      where: { id },
    });
  }

  async deleteById(id: number): Promise<void> {
    this.logger.log(`Deleting preset with id ${Number(id)}...`);
    await this.prisma.presets.delete({ where: { id } });
  }

  async fetchAll(): Promise<PresetDTO[]> {
    this.logger.log("Fetching presets...");
    return await this.prisma.presets.findMany();
  }
}
