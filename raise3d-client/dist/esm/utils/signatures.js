import { __awaiter, __generator } from "tslib";
import { subtle } from "crypto";
var md5 = require('js-md5');
export function generateSign(password, timestamp) {
    return __awaiter(this, void 0, void 0, function () {
        var encoder, data, hash, hashArray, hashHex, md5_hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    encoder = new TextEncoder();
                    data = encoder.encode("password=".concat(password, "&timestamp=").concat(timestamp));
                    return [4 /*yield*/, subtle.digest("SHA-1", data)];
                case 1:
                    hash = _a.sent();
                    hashArray = Array.from(new Uint8Array(hash));
                    hashHex = hashArray
                        .map(function (b) { return b.toString(16).padStart(2, "0"); })
                        .join("");
                    md5_hash = md5.create();
                    md5_hash.update(hashHex);
                    console.log(md5_hash.hex());
                    return [2 /*return*/, md5_hash.hex()];
            }
        });
    });
}
//# sourceMappingURL=signatures.js.map