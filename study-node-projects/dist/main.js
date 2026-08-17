"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const redis_service_1 = require("./common/redis/redis.service");
const redis_global_1 = require("./common/redis/redis.global");
const envFiles = process.env.NODE_ENV === 'production'
    ? ['.env.production']
    : process.env.NODE_ENV === 'uat'
        ? ['.env.uat']
        : process.env.NODE_ENV === 'test'
            ? ['.env.test', '.env.development']
            : ['.env.development'];
for (const file of envFiles) {
    dotenv.config({ path: file });
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const redisService = app.get(redis_service_1.RedisService);
    (0, redis_global_1.setGlobalRedis)(redisService);
    await app.listen(process.env.SERVER_PORT ?? 3000);
    console.log(`Server is running on port ${process.env.SERVER_PORT ?? 3000}`);
}
bootstrap();
//# sourceMappingURL=main.js.map