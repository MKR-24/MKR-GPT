import app from "./app.js";
import { connecttoDatabase } from "./db/connection.js";
//connection and listeners
const PORT = process.env.PORT || 5000;
connecttoDatabase().then(() => {
    app.listen(PORT, () => console.log("Server open & Connected to DB👍"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map