import { subtle } from "crypto";
var md5 = require('js-md5');

export async function generateSign(
  password: string,
  timestamp: number
): Promise<string> {
  // Import the crypto module for hashing
  const encoder = new TextEncoder();

  const data = encoder.encode(`password=${password}&timestamp=${timestamp}`);

  const hash = await subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hash)); // convert buffer to byte array

  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string

  // then, md5 the hashHex

  let md5_hash = md5.create();
  md5_hash.update(hashHex);

  console.log(md5_hash.hex());

  return md5_hash.hex();
}
