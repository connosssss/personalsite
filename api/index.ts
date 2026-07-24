import { Server } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";

const server = new Server(manifest, config);
const handler = server.requestHandler();

export default async function (req: Request) {
  return await handler(req);
}
