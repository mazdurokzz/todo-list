async function test_addtodb() {
    const data = await fetch("http://localhost:3000/api/service/add-to-database", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username:"Yunus",
            todo:"oh shit, wanna fart again"
        })
    })
    console.log(data);
}

async function get_data_from_site() {
    const data = await fetch("http://localhost:3000/api/get-all-todo");
    console.log(await data.json())
}

async function test_status_update() {
    const data = await fetch("http://localhost:3000/api/service/todo/update-status", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            done: "yes",
            id: "2"
        })
    })
    console.log(await data.json())
}

test_status_update()