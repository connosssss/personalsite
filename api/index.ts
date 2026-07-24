import { createHandler } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";

export default await createHandler(manifest, config);
