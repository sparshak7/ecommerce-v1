import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });
userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    }
    catch (error) {
        next(error);
    }
});
userSchema.methods.generateToken = async function (next) {
    try {
        return jwt.sign({
            userID: this._id,
            email: this.email,
        }, process.env.JWT_SECRET, { expiresIn: "15d" });
    }
    catch (error) {
        next(error);
    }
};
export const User = model("User", userSchema);
