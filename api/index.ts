try {
  const stat = await Deno.stat("./_fresh").catch(() => null);
  if (!stat) {
    console.log("Running deno task build for Vercel...");
    const cmd = new Deno.Command(Deno.execPath(), {
      args: ["task", "build"],
    });
    await cmd.output();
  }
} catch (err) {
  console.log("Pre-build check:", err);
}

import { start } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";

await start(manifest, config);
