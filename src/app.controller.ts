import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  root() {
    return {
      title: 'Nest sample app',
      msg: 'hello'
    }
  }

  @Post('/')
  @Render('index')
  send(@Body() form:any) {
    return {
      title: 'NestForm',
      msg: JSON.stringify(form)
    }
  }
}
