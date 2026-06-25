import path from 'node:path';
import dotenv from 'dotenv';

const envName = process.env.ENV ?? 'dev';

dotenv.config({
  path: path.resolve(process.cwd(), 'config', 'env', `${envName}.env`),
  quiet: true,
});

export const environment = {
  name: envName,
  apiBaseUrl: process.env.API_BASE_URL ?? 'https://reqres.in/api',
  uiBaseUrl: process.env.UI_BASE_URL ?? 'https://the-internet.herokuapp.com',
  reqresApiKey: process.env.REQRES_API_KEY,
  apiHeaders: process.env.REQRES_API_KEY
    ? {
        'x-api-key': process.env.REQRES_API_KEY,
      }
    : undefined,
};
