import { load } from 'ts-dotenv';
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const env = load({
    DB_HOST: String,
    DB_PORT: Number,
    DB_USER: String,
    DB_PASS: String,
    DATABASE: String
});

export const mysqlConfig: TypeOrmModuleOptions= {
    type: 'mysql',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DATABASE,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true
}