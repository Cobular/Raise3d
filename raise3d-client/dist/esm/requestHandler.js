import { __assign, __awaiter, __generator } from "tslib";
// requestHandler.ts
import fetch from "cross-fetch";
var RequestHandler = /** @class */ (function () {
    function RequestHandler() {
        this.baseURL = "http://192.168.99.151:10800/v1";
    }
    RequestHandler.prototype.setKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.key = key;
                return [2 /*return*/];
            });
        });
    };
    RequestHandler.prototype.get = function (path, params) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = new URL("".concat(this.baseURL).concat(path));
                        url.search = new URLSearchParams(params).toString();
                        return [4 /*yield*/, fetch(url.toString(), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.text()];
                }
            });
        });
    };
    /**
     *
     * @param path The path to send the request to
     * @param params URL parameters
     * @param body HTTP body
     * @param headers Headers. Defaults to `Content-Type: application/json`
     * @returns
     */
    RequestHandler.prototype.post = function (path, options) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.key === undefined) {
                            throw new Error("No key set");
                        }
                        url = new URL("".concat(this.baseURL).concat(path));
                        url.search = new URLSearchParams().toString();
                        url.searchParams.append("token", this.key);
                        headers = __assign({ "Content-Type": "application/json" }, options.headers);
                        return [4 /*yield*/, fetch(url.toString(), {
                                method: "POST",
                                headers: headers,
                                body: options.body,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    return RequestHandler;
}());
export { RequestHandler };
//# sourceMappingURL=requestHandler.js.map