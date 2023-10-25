// apiClient.ts
import { RequestHandler } from "./requestHandler";
import { generateSign } from "./utils/signatures";

export class APIClient {
  private requestHandler: RequestHandler;

  constructor() {
    this.requestHandler = new RequestHandler();
  }

  /**
   * Login to the API
   *
   * @param password The password to login with
   * @returns The token to use for future requests. This token is also stored internally.
   */
  async login(password: string): Promise<string> {
    const timestamp = new Date().getTime();
    const sign = await generateSign(password, timestamp);

    const response = await this.requestHandler.get("/login", {
      sign,
      timestamp,
    });

    if (response.status !== 1) {
      throw new Error(response.error.msg);
    }

    if (!response.data.token) {
      throw new Error("No token found in response");
    }

    this.requestHandler.setKey(response.data.token);

    return response.data.token;
  }

  /**
   * Upload a file to the API
   *
   * @param filePath The path of the file to upload
   * @param dirPath The directory path where the file will be uploaded
   * @returns A promise that resolves when the upload is complete
   */
  async uploadFile(
    fileName: string,
    fileBlob: Blob,
    dirPath: string
  ): Promise<void> {
    const formData = new FormData();

    formData.append("desc", JSON.stringify({ dir_path: dirPath }));
    formData.append("file", fileBlob, fileName);

    const response = await this.requestHandler.post("/fileops/upload", {
      body: formData,
    });

    if (response.status !== 1) {
      throw new Error(response.error.msg);
    }
  }

  /**
   * Get printer basic information
   *
   * @returns A promise that resolves with the printer basic information
   */
  async getPrinterBasicInfo(): Promise<any> {
    const response = await this.requestHandler.get("/printer/basic", {});

    if (response.status !== 1) {
      throw new Error(response.error.msg);
    }

    return response.data;
  }
}
