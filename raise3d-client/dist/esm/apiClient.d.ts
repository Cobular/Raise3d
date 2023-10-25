export declare class APIClient {
    private requestHandler;
    constructor();
    /**
     * Login to the API
     *
     * @param password The password to login with
     * @returns The token to use for future requests. This token is also stored internally.
     */
    login(password: string): Promise<string>;
    /**
     * Upload a file to the API
     *
     * @param filePath The path of the file to upload
     * @param dirPath The directory path where the file will be uploaded
     * @returns A promise that resolves when the upload is complete
     */
    uploadFile(fileName: string, fileBlob: Blob, dirPath: string): Promise<void>;
    /**
     * Get printer basic information
     *
     * @returns A promise that resolves with the printer basic information
     */
    getPrinterBasicInfo(): Promise<any>;
}
