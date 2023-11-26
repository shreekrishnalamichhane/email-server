import dotenv from 'dotenv';
dotenv.config();

// Runtime Environment Details
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PROD_ENV = process.env.NODE_ENV === 'production' ? true : false;
export const DEV_ENV = process.env.NODE_ENV === 'development' ? true : false;
export const PORT = process.env.PORT || 5001;

// Server Details
export const SERVER_NAME = process.env.SERVER_NAME || 'Velorona';
export const SERVER_URL = process.env.SERVER_URL || '';
export const VELORONA_LOGO_URL = process.env.VELORONA_LOGO_URL || '';

// Discord notification details
export const DISCORD_ERROR_NOTIFY_WEBHOOK_URL = process.env.DISCORD_ERROR_NOTIFY_WEBHOOK_URL || '';

// SMTP details
export const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
export const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
export const SMTP_SECURE = process.env.SMTP_SECURE == 'true' ? true : false || false;
export const SMTP_USER = process.env.SMTP_USER || '';
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';
export const SMTP_FROM = process.env.SMTP_FROM || '';
export const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME || 'Velorona';

// Email Authentication details
export const EMAIL_AUTH_SECRET = process.env.EMAIL_AUTH_SECRET || '';
