import client from "../database/psql.js";

async function get_data() {
    const data_from_db = await client.query("SELECT * FROM todos");
    return data_from_db;
}

async function add_to_db(username, todo) {
    const add = await client.query("INSERT INTO todos (username, todo) VALUES ($1, $2)", [username, todo]);
    if (add.length == 0) {
        throw new console.error("Ошибка добавления в базу данных");
        
    }
    return "Успешно";
}

async function update_status(done, id) {
    const data = client.query("UPDATE todos SET done = $1 WHERE id = $2", [done, id]);
    if (data.length == 0) {
        throw new console.error("Ошибка обновления статуса");
    }
    return "Успешно";
}



export {
    get_data,
    add_to_db,
    update_status,
}

