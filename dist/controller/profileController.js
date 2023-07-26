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
exports.removeProfile = exports.updateProfile = exports.createProfile = exports.getOneProfile = exports.getAllProfile = void 0;
const profileModel_1 = __importDefault(require("../model/profileModel"));
const appError_1 = require("../utils/appError");
const getAllProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileGet = yield profileModel_1.default.find();
        return res.status(appError_1.Httpcode.OK).json({
            message: "Data Gotten Sucessfully",
            data: profileGet,
        });
    }
    catch (error) {
        return res.status(appError_1.Httpcode.BAD_REQUEST).json({
            message: "An Error Occoured Getting Request",
            data: error,
        });
    }
});
exports.getAllProfile = getAllProfile;
const getOneProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneProfile = yield profileModel_1.default.findById(req.params.id);
        return res.status(appError_1.Httpcode.OK).json({
            message: "Profile Gotten",
            data: oneProfile,
        });
    }
    catch (error) {
        return res.status(appError_1.Httpcode.BAD_REQUEST).json({
            message: `AN Error Occoured... Unable to get ${req.params.id}`,
            data: error,
        });
    }
});
exports.getOneProfile = getOneProfile;
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, age, bio } = req.body;
        const newProfile = yield profileModel_1.default.create({
            email,
            name,
            age,
            bio,
        });
        return res.status(appError_1.Httpcode.CREATED).json({
            message: "New Profile Created",
            data: newProfile,
        });
    }
    catch (error) {
        return res.status(appError_1.Httpcode.BAD_REQUEST).json({
            message: "An Error Occoured... Couldn't create a new Profile",
            data: error,
        });
    }
});
exports.createProfile = createProfile;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bio } = req.body;
        const profileUpdate = yield profileModel_1.default.findByIdAndUpdate(req.params.profileID, { bio }, { new: true });
        return res.status(appError_1.Httpcode.RESOURCE_UPDATED_SUCCESSFULLY).json({
            message: "Profile Updated...",
            data: profileUpdate,
        });
    }
    catch (error) {
        return res.status(appError_1.Httpcode.BAD_REQUEST).json({
            message: "An Error Occoured... Can't Perform Update",
            data: error,
        });
    }
});
exports.updateProfile = updateProfile;
const removeProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteData = yield profileModel_1.default.findByIdAndDelete(req.params.id);
        return res.status(appError_1.Httpcode.OK).json({
            message: "Profile Deleted",
            data: deleteData,
        });
    }
    catch (error) {
        return res.status(appError_1.Httpcode.BAD_REQUEST).json({
            message: "An Error Occoured... Unabel to delete Profile",
            data: error,
        });
    }
});
exports.removeProfile = removeProfile;
