import { get_data, add_to_db, update_status} from "../services/database_get_data.js";
import express from "express";

const router = express.Router();

router.use(express.json());

router.get("/get-all-todo", async (req, res) => {
    try {
    const data = await get_data();
    if (data.length == 0) {
        return res.status(400).json({"message": "нету заметок!"});
    }
    return res.status(200).json({"data": data.rows});
   } catch (err) {
        return res.status(500).json({"message": "Ошибка сервера!"});
   }
})

router.post("/service/todo/add-to-database", async (req, res) => {
    try {
    const {username, todo} = req.body;
    if (!username && !todo || !username || !todo) {
        return res.status(400).json({"message": "Неправильный ввод данных"});
    } else if (username.length == 0 || todo == 0) {
        return res.status(400).json({"message": "Неправильный ввод данных"});
    } else {
        await add_to_db(username, todo);
        return res.status(201).json({"message": "Успешное добавление в базу данных!"});
    }
} catch (Err) {
    console.log(`Ошибка добавления в базу данных\n${err}`);
    return res.status(500).json({"message": "Ошибка добавления в базу данных"});
}
})

router.post("/service/todo/update-status", async (req, res) => {
    try {
        const {done, id} = req.body;
        if (!done || done == 0) {
            return res.status(400).json({"message": "Неверное обновление статуса"});
        } else {
            await update_status(done, id);
            return res.status(201).json({"message": "Успешное обновление"})
        }
    } catch (err) {
        console.log(`Ошибка добавления в базу данных\n${err}`);
        return res.status(500).json({"message": "Ошибка обновления статуса"});
    }
})

export default router;