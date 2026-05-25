import http from "node:http";
import { env } from "./env.js";
import { createServerApp } from "./app/index.js";
async function main() {
  try {
    const server = http.createServer(createServerApp);
    const PORT: number = env.PORT ? +env.PORT : 3000;

    server.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (error) {}
}

main();
