import { readFile } from "fs/promises";
import { APIClient } from "raise3d-client";

async function tester() {
  const client = new APIClient();

  console.log("Logging in...")

  const token = await client.login("charlypog");

  console.log(token);

  // Read this text file from disk (test.txt) and upload it to the root directory
  const file = await readFile("./test.js");

  await client.uploadFile("test.gcode", new Blob([file]), "Local/webapi_store");

  const stats = await client.getPrinterBasicInfo();

  console.log(stats)
}

(async () => {
  tester();
})();