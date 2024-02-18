import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PresetDto } from './dtos/preset.dto';
import { ParamDto } from './dtos/param.dto';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('')
  async savePreset(@Body() body: PresetDto): Promise<void> {
    await this.databaseService.savePreset(body);
  }

  @Delete(':id')
  async deletePresetById(@Param() params: ParamDto): Promise<void> {
    await this.databaseService.deleteById(parseInt(params.id));
  }

  @Get('')
  async fetchAllPresets(): Promise<PresetDto[]> {
    return await this.databaseService.fetchAll();
  }

  @Get(':id')
  async fetchPresetById(@Param() params: ParamDto): Promise<PresetDto> {
    return await this.databaseService.fetchById(parseInt(params.id));
  }
}
