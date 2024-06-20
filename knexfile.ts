import dotenv from 'dotenv';
import type { Knex } from 'knex';
dotenv.config();

const knexConfig: { [key: string]: Knex.Config } = {
  connect: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: './app/lib/knex/migrations',
      extension: '.ts'
    },
  },
};

export default knexConfig;