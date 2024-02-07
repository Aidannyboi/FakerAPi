import express from "express";

const app = express();

const port = 8000;

const users = [
    {firstName: "Reimu", lastName : "Hakurei", id: 123456},
    {firstName: "Temu", lastName : "Hakurei", id: 1234567},
    {firstName: "Pemu", lastName : "Hakurei", id: 1234568}

]

app.use( express.json() );

app.get("/api/users", (req, res) => {
    res.json(users);
})

app.post("/api/users", (req, res) => {
    console.log(req.body);

    users.push(req.body);

    res.json( users );

});

app.listen(port, () => console.log('Listening on port: ${port}'));