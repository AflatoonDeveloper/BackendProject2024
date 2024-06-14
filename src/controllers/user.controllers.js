import { AsyncHeadler } from "../utils/AsyncHeader.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/Cloudenary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
const registorUser = AsyncHeadler(async (req, res, next) => {
    // Debugging: Log incoming files and fields


    const { username, email, fullname, password } = req.body;

    // Check for required fields
    if ([username, email, fullname, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields must be required");
    }

    // Check if user already exists
    const userExisted = await User.findOne({
        $or: [{ username }, { email }]
    });
    if (userExisted) {
        throw new ApiError(409, "User already existed");
    }

    // File paths
    const avatorPath = req.files?.avatar?.[0]?.path;
    const coverImagePath = req.files?.coverImage?.[0]?.path;

    if (!avatorPath) {
        throw new ApiError(400, "Avator image must be provided");
    }

    // Upload to Cloudinary
    let uploadAvatarCloud, uploadCoverImageCloud;
    try {
        uploadAvatarCloud = await uploadOnCloudinary(avatorPath);
        uploadCoverImageCloud = coverImagePath ? await uploadOnCloudinary(coverImagePath) : null;
    } catch (error) {
        throw new ApiError(400, error.message);
    }
    // Create user
    const user = await User.create({
        fullname,
        avatar: uploadAvatarCloud.url,
        coverImage: uploadCoverImageCloud?.url || "",
        username: username.toLowerCase(),
        email,
        password
    });

    const createUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createUser) {
        throw new ApiError(500, "Something went wrong while creating the user");
    }

    return res.status(201).json(
        new ApiResponse(200, createUser, "User registered successfully")
    );
});

export { registorUser };