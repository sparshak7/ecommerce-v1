import { connect } from "mongoose";
export const connectDB = async () => {
    // try {
    //   await connect(process.env.MONGO_URI);
    //   console.log("Connection to DB succesful.");
    // } catch (error) {
    //   console.log("Connection to DB failed.");
    //   process.exit(0);
    // }
    try {
        await connect(process.env.MONGO_URI);
        console.log("Connection to DB succesful.");
    }
    catch (error) {
        console.log("Connection to DB failed.");
        process.exit(0);
    }
};
