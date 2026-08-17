import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { SmsLoginDto } from './dto/sms-login.dto';
import { RedisAwareService } from "../../common/redis/redis.global";
export declare class LoginService extends RedisAwareService {
    create(createLoginDto: CreateLoginDto): string;
    findAll(): string;
    update(id: number, updateLoginDto: UpdateLoginDto): string;
    remove(id: number): string;
    sendSms(smsLoginDto: SmsLoginDto): {
        code: number;
        success: boolean;
        message: string;
        data: any;
    };
    findOne(phone: string, code: string): Promise<{
        code: number;
        success: boolean;
        message: string;
        data: any;
    }>;
}
