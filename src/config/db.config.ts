import * as path from 'path'
import { registerAs } from '@nestjs/config'
import { BetterSqlite3ConnectionOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions'

export default registerAs(
  'dbconfig.dev',
  (): BetterSqlite3ConnectionOptions => ({
    database: process.env.DATABASE_URL,
    type: 'better-sqlite3',

    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],

    synchronize: true,
  })
)
