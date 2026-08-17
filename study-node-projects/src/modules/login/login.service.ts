import { Injectable } from '@nestjs/common';
// import { RedisService } from 'nestjs-redis';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { SmsLoginDto } from './dto/sms-login.dto';
import { RedisAwareService } from '@/common/redis/redis.global';

@Injectable()
export class LoginService extends RedisAwareService {
  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
  sendSms(smsLoginDto: SmsLoginDto) {
    this.redis.set(smsLoginDto.phone, '5848', 60 * 5);
    const isExist = this.redis.get('sms_number');
    if (isExist) {
      this.redis.incr('sms_number');
    } else {
      this.redis.set('sms_number', '1');
    }
    return {
      code: 200,
      success: true,
      message: '验证码发送成功',
      data: null,
    };
  }
  async findOne(phone: string, code: string) {
    const smsCode = await this.redis.get(phone);
    console.log(smsCode, code, 'smsCode, code');
    if (smsCode && smsCode === code) {
      return {
        code: 200,
        success: true,
        message: '登录成功！',
        data: null,
      }
    } else {
      return {
        code: 400,
        success: false,
        message: '验证码错误或已过期！',
        data: null,
      }
    }
  }
}
