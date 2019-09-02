"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.PORT = 3333;
        this.HOST = '0.0.0.0';
        this.application = express_1.default();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.application.use(express_1.default.json());
            yield this.application.use(cors_1.default());
        });
    }
    routes() {
        this.application.get('/categories', (request, response) => {
            return response.send({ msg: "Hello world !!!" });
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.application.listen(this.PORT, this.HOST);
            console.log(`Server started on port ${this.PORT}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map