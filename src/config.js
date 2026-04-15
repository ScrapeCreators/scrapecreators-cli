import Conf from "conf";
import { chmodSync } from "fs";

const config = new Conf({
  projectName: "scrapecreators",
  schema: {
    apiKey: { type: "string", default: "" },
    defaultFormat: {
      type: "string",
      default: "auto",
      enum: ["auto", "json", "table", "csv", "markdown"],
    },
  },
});

// restrict config file to owner-only (contains API key)
try {
  chmodSync(config.path, 0o600);
} catch (err) {
  console.error(`Warning: could not set 0600 on ${config.path}: ${err.message}`);
}

export default config;
