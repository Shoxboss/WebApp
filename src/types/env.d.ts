declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'test' | 'development' | 'production';
      PORT: string;
      LOG_LEVEL: string;
      REQUEST_LIMIT: string;
      SESSION_SECRET: string;
      OPENAPI_SPEC: string;
      DATABASE_URL: string;
    }
  }
}

export {};
