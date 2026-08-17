import { LoginService } from './login.service';
import { SmsLoginDto, SmsLoginQueryDto } from './dto/sms-login.dto';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    create(smsLoginDto: SmsLoginDto): {
        code: number;
        success: boolean;
        message: string;
        data: any;
    };
    findOne(smsLoginQueryDto: SmsLoginQueryDto): Promise<{
        code: number;
        success: boolean;
        message: string;
        data: any;
    }>;
    remove(id: string): string;
}
