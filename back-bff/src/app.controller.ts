import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.appService.getUser(id);
  }
}
