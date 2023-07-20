import { Request, Response } from "express";
import userModel from "../model/profileModel";
import { Httpcode } from "../utils/appError";

export const getAllProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const profileGet = await userModel.find();

    return res.status(Httpcode.OK).json({
      message: "Data Gotten Sucessfully",
      data: profileGet,
    });
  } catch (error) {
    return res.status(Httpcode.BAD_REQUEST).json({
      message: "An Error Occoured Getting Request",
      data: error,
    });
  }
};
