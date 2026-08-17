"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const redis_global_1 = require("../../common/redis/redis.global");
let LoginService = class LoginService extends redis_global_1.RedisAwareService {
    create(createLoginDto) {
        return 'This action adds a new login';
    }
    findAll() {
        return `This action returns all login`;
    }
    update(id, updateLoginDto) {
        return `This action updates a #${id} login`;
    }
    remove(id) {
        return `This action removes a #${id} login`;
    }
    sendSms(smsLoginDto) {
        this.redis.set(smsLoginDto.phone, '5848', 60 * 5);
        const isExist = this.redis.get('sms_number');
        if (isExist) {
            this.redis.incr('sms_number');
        }
        else {
            this.redis.set('sms_number', '1');
        }
        return {
            code: 200,
            success: true,
            message: '验证码发送成功',
            data: null,
        };
    }
    async findOne(phone, code) {
        const smsCode = await this.redis.get(phone);
        console.log(smsCode, code, 'smsCode, code');
        if (smsCode && smsCode === code) {
            return {
                code: 200,
                success: true,
                message: '登录成功！',
                data: null,
            };
        }
        else {
            return {
                code: 400,
                success: false,
                message: '验证码错误或已过期！',
                data: null,
            };
        }
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)()
], LoginService);
//# sourceMappingURL=login.service.js.map