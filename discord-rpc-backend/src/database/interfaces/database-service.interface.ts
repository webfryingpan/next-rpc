import { PresetDto } from '../dtos/preset.dto';

export interface IDatabaseService {
  savePreset(obj: PresetDto): Promise<void>;
  fetchById(id: number): Promise<PresetDto>;
  fetchAll(): Promise<PresetDto[]>;
  deleteById(id: number): Promise<void>;
}
