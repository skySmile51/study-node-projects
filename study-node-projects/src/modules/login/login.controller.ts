import { Controller, Get, Post, Body, Query, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { SmsLoginDto, SmsLoginQueryDto } from './dto/sms-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post('send')
  create(@Body() smsLoginDto: SmsLoginDto) {
    return this.loginService.sendSms(smsLoginDto);
  }

  @Get('account')
  findOne(@Query() smsLoginQueryDto: SmsLoginQueryDto) {
    console.log(smsLoginQueryDto, 'smsLoginQueryDto');
    return this.loginService.findOne(smsLoginQueryDto.phone, smsLoginQueryDto.code);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
