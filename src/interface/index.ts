import { Httpcode } from "../utils/appError";

export interface ErrorArgs {
  name?: string;
  isOperatonal: boolean;
  message: string;
  httpCode: Httpcode;
}
