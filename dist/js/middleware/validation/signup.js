"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = __importStar(require("yup"));
var dayjs_1 = __importDefault(require("dayjs"));
var signupValidation = function (_a) {
    var boomify = _a.boomify;
    return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, firstName, lastName, birthdate, gender, phoneNumber, email, password, confirmPassword, address, accountType, signupIndividualSchema, signupBusinessSchema, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, firstName = _a.firstName, lastName = _a.lastName, birthdate = _a.birthdate, gender = _a.gender, phoneNumber = _a.phoneNumber, email = _a.email, password = _a.password, confirmPassword = _a.confirmPassword, address = _a.address, accountType = _a.accountType;
                    // console.log({ body: req.body });
                    console.log({ accountType: accountType });
                    signupIndividualSchema = Yup.object({
                        firstName: Yup.string()
                            .max(15, "Must be 15 characters or less")
                            .required("This field is required"),
                        lastName: Yup.string()
                            .max(20, "Must be 20 characters or less")
                            .required("This field is required"),
                        birthdate: Yup.date().test("birthdate", "Age must be greater than or equal to 18", function (value) {
                            var date1 = (0, dayjs_1.default)(Date.now());
                            var date2 = (0, dayjs_1.default)(value);
                            var diffDate = date1.diff(date2, "year");
                            return diffDate >= 18 ? true : false;
                        }),
                        gender: Yup.string().required("This field is required"),
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("This field is required"),
                        password: Yup.string()
                            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "Oops! You need a password longer than 8 characters with numbers and letters.")
                            .min(8, "Password must be at least 8 characters")
                            .required("This field is required"),
                        confirmPassword: Yup.string()
                            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "Oops! You need a password longer than 8 characters with numbers and letters.")
                            .min(8, "Password must be at least 8 characters")
                            .oneOf([Yup.ref("password"), null], "Passwords must match")
                            .required("This field is required"),
                    });
                    signupBusinessSchema = Yup.object().shape({
                        firstName: Yup.string().required("This field is required"),
                        lastName: Yup.string().required("This field is required"),
                        phoneNumber: Yup.string().required("This field is required"),
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("This field is required"),
                        password: Yup.string()
                            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
                            message: "At least one lowercase characters, one uppercase characters and one number",
                        })
                            .min(8, "Password must be at least 8 characters")
                            .required("This field is required"),
                        confirmPassword: Yup.string()
                            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "Oops! You need a password longer than 8 characters with numbers and letters.")
                            .min(8, "Password must be at least 8 characters")
                            .oneOf([Yup.ref("password"), null], "Passwords must match")
                            .required("This field is required"),
                        address: Yup.string().required("This field is required"),
                    });
                    if (!(accountType === "individual")) return [3 /*break*/, 2];
                    return [4 /*yield*/, signupIndividualSchema.validate({
                            firstName: firstName,
                            lastName: lastName,
                            birthdate: birthdate,
                            gender: gender,
                            email: email,
                            password: password,
                            confirmPassword: confirmPassword,
                        }, {
                            abortEarly: false,
                        })];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    if (!(accountType === "business")) return [3 /*break*/, 4];
                    return [4 /*yield*/, signupBusinessSchema.validate({
                            firstName: firstName,
                            lastName: lastName,
                            phoneNumber: phoneNumber,
                            email: email,
                            password: password,
                            confirmPassword: confirmPassword,
                            address: address,
                        }, {
                            abortEarly: false,
                        })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [2 /*return*/, next()];
                case 5:
                    error_1 = _b.sent();
                    next(boomify(400, error_1.errors[0]));
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
};
exports.default = signupValidation;
