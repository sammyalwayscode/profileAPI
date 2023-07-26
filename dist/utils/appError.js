"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.Httpcode = void 0;
var Httpcode;
(function (Httpcode) {
    Httpcode[Httpcode["OK"] = 200] = "OK";
    Httpcode[Httpcode["CREATED"] = 201] = "CREATED";
    Httpcode[Httpcode["RESOURCE_UPDATED_SUCCESSFULLY"] = 204] = "RESOURCE_UPDATED_SUCCESSFULLY";
    Httpcode[Httpcode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    Httpcode[Httpcode["UNAUTORIZED"] = 402] = "UNAUTORIZED";
    Httpcode[Httpcode["FOBIDDEN"] = 403] = "FOBIDDEN";
    Httpcode[Httpcode["NOT_FOUND"] = 404] = "NOT_FOUND";
    Httpcode[Httpcode["CONFLIT"] = 409] = "CONFLIT";
    Httpcode[Httpcode["UNPROCESSED_IDENTITY"] = 422] = "UNPROCESSED_IDENTITY";
    Httpcode[Httpcode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(Httpcode || (exports.Httpcode = Httpcode = {}));
class AppError extends Error {
    constructor(args) {
        super(args.message);
        this.isOperational = true;
        Object.setPrototypeOf(this, new.target.prototype);
        this.httpCode = args.httpCode;
        this.name = args.name || "Error";
        if (args.isOperatonal !== undefined) {
            this.isOperational = args.isOperatonal;
        }
        Error.captureStackTrace(this);
    }
}
exports.AppError = AppError;
