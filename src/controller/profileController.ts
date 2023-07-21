import { Request, Response } from "express";
import profileModel from "../model/profileModel";
import { Httpcode } from "../utils/appError";
import { iProfile } from "../interface";

export const getAllProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const profileGet = await profileModel.find();

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

export const getOneProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const oneProfile = await profileModel.findById(req.params.id);

    return res.status(Httpcode.OK).json({
      message: "Profile Gotten",
      data: oneProfile,
    });
  } catch (error) {
    return res.status(Httpcode.BAD_REQUEST).json({
      message: `AN Error Occoured... Unable to get ${req.params.id}`,
      data: error,
    });
  }
};

export const createProfile = async (
  req: Request<{}, {}, iProfile>,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, age, bio } = req.body;
    const newProfile = await profileModel.create({
      email,
      name,
      age,
      bio,
    });

    return res.status(Httpcode.CREATED).json({
      message: "New Profile Created",
      data: newProfile,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An Error Occoured... Couldn't create a new Profile",
      data: error,
    });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { bio } = req.body;
    const profileUpdate = await profileModel.findByIdAndUpdate(
      req.params.profileID,
      { bio },
      { new: true }
    );

    return res.status(Httpcode.RESOURCE_UPDATED_SUCCESSFULLY).json({
      message: "Profile Updated...",
      data: profileUpdate,
    });
  } catch (error) {
    return res.status(Httpcode.BAD_REQUEST).json({
      message: "An Error Occoured... Can't Perform Update",
      data: error,
    });
  }
};

export const removeProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const deleteData = await profileModel.findByIdAndDelete(req.params.id);

    return res.status(Httpcode.OK).json({
      message: "Profile Deleted",
      data: deleteData,
    });
  } catch (error) {
    return res.status(Httpcode.BAD_REQUEST).json({
      message: "An Error Occoured... Unabel to delete Profile",
      data: error,
    });
  }
};
