import express from "express";
import router from "./routes/router.js";

const app = express();

app.use("/api", router);

app.listen(3000, () => {
    console.log("Успешный запуск сервера!");
})