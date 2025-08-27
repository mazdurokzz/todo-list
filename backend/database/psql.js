import { Pool } from "pg";

const client = new Pool({
    host: "localhost",
    user: "postgres",
    database: "todo_list",
    password: "1234",
    port: 5432
});

await client.connect()
    .then((connected) => {
        return console.log(`Успешное подключение!\n${connected}`);
    }) .catch((err) => {
        return console.log(`Неудачное подключение к POSTGRESQL\n${err}`);
    })

export default client;