import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model";
import ApiError from "../utils/ApiError";

export const verifyJWT = asyncHandler(async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if(!token){
            throw new ApiError(401, "Unauthorised request")
        }
        const decodedToken = jwt.verify(token, process_params.env.REFRESH_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user) {
            throw new ApiError(401, "invalid access token")
        }
    } catch (error) {
        throw new ApiError(401, "invalid access token")

    }
})