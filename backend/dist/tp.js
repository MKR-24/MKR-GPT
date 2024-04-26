import express from "express";
const app = express();
app.get("/hello", (req, res, next) => {
    return res.send("Hello");
});
app.listen(3000, () => console.log("Server Open"));
//# sourceMappingURL=tp.js.map