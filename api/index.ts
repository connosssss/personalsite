import { createHandler } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";

const handlerPromise = createHandler(manifest, config);

export default async function (req: Request): Promise<Response> {
  const handler = await handlerPromise;
  return await handler(req);
}
