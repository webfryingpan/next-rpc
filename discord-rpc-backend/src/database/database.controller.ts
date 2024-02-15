import {
  Controller,
  Post,
  Get,
  Body,
  HttpException,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PresetDto } from './dtos/preset.dto';
import { IdDto } from './dtos/id.dto';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('save')
  async savePreset(@Body() body: PresetDto): Promise<object> {
    try {
      await this.databaseService.savePreset(body);
      return { message: 'Successfuly added preset to database!' };
    } catch (error) {
      throw new HttpException(
        'Failed to save preset',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('fetch_all')
  async fetchAllPresets(): Promise<PresetDto[]> {
    try {
      return await this.databaseService.fetchAll();
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve presets',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('fetch_one')
  async fetchPresetById(@Body() body: IdDto): Promise<PresetDto> {
    try {
      return await this.databaseService.fetchById(body.id);
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve preset',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('delete')
  async deletePresetById(@Body() body: IdDto): Promise<object> {
    try {
      await this.databaseService.deleteById(body.id);
      return { message: 'Successfuly deleted one preset!' };
    } catch (error) {
      throw new HttpException(
        'Failed to delete preset',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
