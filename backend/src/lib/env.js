import dotenv from "dotenv";

dotenv.config();

const { PORT, DB_URL, NODE_ENV, "DB_URL": DB_URL_DASH } = process.env;

const resolvedDBUrl = DB_URL ?? DB_URL_DASH;

if (!resolvedDBUrl) {
  throw new Error(
    "Missing environment variable DB_URL (or DB-URL). Add DB_URL=mongodb://... to your .env",
  );
} 

export const ENV = {
  PORT,
  DB_URL: resolvedDBUrl,
  NODE_ENV,
  CLIENT_URL:process.env.CLIENT_URL,
  INNGEST_EVENT_KEY:process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY:process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY:process.env.STREAM_API_KEY,
  STREAM_API_SECRET:process.env.STREAM_API_SECRET
};
