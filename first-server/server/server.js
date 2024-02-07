import express from "express";

import {faker} from "@faker-js/faker";

const app = express();

const port = 8000;

const createUser = () =>{
    const newUser = {

        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.person.firstName(),
        firstName : faker.person.lastName(),
        _id : Math.floor(Math.random() * 1000000).toString()

    }
}

const createComp = () => {
    
}

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