import { Request } from "express";
import { AppError, Httpcode } from "../../utils/appError";

// const devError = (err: AppError, res:Response) => {
//     return res.status(Httpcode.INTERNAL_SERVER_ERROR).json({
//         error:err,
//         status: err.httpCode,
//         message: err.message,
//         stack: err.stack
//     })
// }
