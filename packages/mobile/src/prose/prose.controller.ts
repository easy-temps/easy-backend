import { Controller, Get } from '@nestjs/common';
import { proses } from './prose.data';

@Controller('/prose')
export class ProseController {
  @Get()
  public async getProse() {
    return proses[Math.floor(Math.random() * proses.length)];
  }
}
