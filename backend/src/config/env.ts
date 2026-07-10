import dotenv from "dotenv";

dotenv.config({ quiet: true });
// dotenv.config({}); hindi ka makakakuha ng information message lang sa terminal kapag walang condition sa loob

//import "dotenv/config"

// balikan ko ito maraming way pwedeng gawin

export const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  FRONTEND_URL: process.env.FRONTEND_URL,
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
};
