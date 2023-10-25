// requestHandler.ts
import fetch from "cross-fetch";

export class RequestHandler {
  key: string | undefined;
  baseURL: string;

  constructor() {
    this.baseURL = "http://192.168.99.151:10800/v1";
  }

  async setKey(key: string) {
    this.key = key;
  }

  async get(path: string, params: any): Promise<any> {
    const url = new URL(`${this.baseURL}${path}`);
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.text();
  }

  /**
   *
   * @param path The path to send the request to
   * @param params URL parameters
   * @param body HTTP body
   * @param headers Headers. Defaults to `Content-Type: application/json`
   * @returns
   */
  async post(
    path: string,
    options: {
      body: BodyInit;
      params?: any;
      headers?: HeadersInit;
    }
  ): Promise<any> {
    if (this.key === undefined) {
      throw new Error("No key set");
    }

    const url = new URL(`${this.baseURL}${path}`);
    url.search = new URLSearchParams().toString();
    url.searchParams.append("token", this.key);

    let headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const response = await fetch(url.toString(), {
      method: "POST",
      headers,
      body: options.body,
    });

    return response.json();
  }
}
