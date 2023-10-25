export declare class RequestHandler {
    key: string | undefined;
    baseURL: string;
    constructor();
    setKey(key: string): Promise<void>;
    get(path: string, params: any): Promise<any>;
    /**
     *
     * @param path The path to send the request to
     * @param params URL parameters
     * @param body HTTP body
     * @param headers Headers. Defaults to `Content-Type: application/json`
     * @returns
     */
    post(path: string, options: {
        body: BodyInit;
        params?: any;
        headers?: HeadersInit;
    }): Promise<any>;
}
