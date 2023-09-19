interface ENV {
  MONGO_URL: string | undefined;
}

interface Config {
  MONGO_URL: string;
}

const getConfig = (): ENV => ({ MONGO_URL: process.env.MONGO_URL });

const config = getConfig();

export const getENV = (): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`);
    }
  }
  return config as Config;
};
