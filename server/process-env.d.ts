export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      JWT_SECRET: string;
      MONGO_URI: string;
    }
  }
}
