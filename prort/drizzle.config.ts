import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./prort/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["src_*"],
} satisfies Config;
