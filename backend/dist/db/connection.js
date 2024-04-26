import { connect } from "mongoose";
import { disconnect } from "mongoose";
async function connecttoDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot Connect to MongoDB");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot Disconnect to MongoDB");
    }
}
export { connecttoDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map