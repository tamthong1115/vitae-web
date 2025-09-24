import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
    NEXT_PUBLIC_BACKEND_GOOGLE_LOGIN_PATH: z.string().min(1),
    NEXT_PUBLIC_FRONTEND_CALLBACK: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_BACKEND_GOOGLE_LOGIN_PATH:
      process.env.NEXT_PUBLIC_BACKEND_GOOGLE_LOGIN_PATH,
    NEXT_PUBLIC_FRONTEND_CALLBACK: process.env.NEXT_PUBLIC_FRONTEND_CALLBACK,
  },
});
