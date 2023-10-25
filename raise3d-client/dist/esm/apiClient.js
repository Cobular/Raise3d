import { __awaiter, __generator } from "tslib";
// apiClient.ts
import { RequestHandler } from "./requestHandler";
import { generateSign } from "./utils/signatures";
var APIClient = /** @class */ (function () {
    function APIClient() {
        this.requestHandler = new RequestHandler();
    }
    /**
     * Login to the API
     *
     * @param password The password to login with
     * @returns The token to use for future requests. This token is also stored internally.
     */
    APIClient.prototype.login = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, sign, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = new Date().getTime();
                        return [4 /*yield*/, generateSign(password, timestamp)];
                    case 1:
                        sign = _a.sent();
                        return [4 /*yield*/, this.requestHandler.get("/login", {
                                sign: sign,
                                timestamp: timestamp,
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.status !== 1) {
                            throw new Error(response.error.msg);
                        }
                        if (!response.data.token) {
                            throw new Error("No token found in response");
                        }
                        this.requestHandler.setKey(response.data.token);
                        return [2 /*return*/, response.data.token];
                }
            });
        });
    };
    /**
     * Upload a file to the API
     *
     * @param filePath The path of the file to upload
     * @param dirPath The directory path where the file will be uploaded
     * @returns A promise that resolves when the upload is complete
     */
    APIClient.prototype.uploadFile = function (fileName, fileBlob, dirPath) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        formData.append("desc", JSON.stringify({ dir_path: dirPath }));
                        formData.append("file", fileBlob, fileName);
                        return [4 /*yield*/, this.requestHandler.post("/fileops/upload", {
                                body: formData,
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 1) {
                            throw new Error(response.error.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get printer basic information
     *
     * @returns A promise that resolves with the printer basic information
     */
    APIClient.prototype.getPrinterBasicInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestHandler.get("/printer/basic", {})];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 1) {
                            throw new Error(response.error.msg);
                        }
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    return APIClient;
}());
export { APIClient };
//# sourceMappingURL=apiClient.js.map