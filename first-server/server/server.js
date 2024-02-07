import express, { response } from "express";

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
        _id : faker.string.uuid()

    }

    return newUser;
}

const createComp = () => {
    const newCompany = {
        name : faker.company.name(),
        address : {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode : faker.location.zipCode(),
            country : faker.location.country()

        }
    }

    return newCompany;
}

app.use( express.json() );

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
})

app.get("/api/company/new", (req, res) => {
    res.json(createComp());
})

app.get("/api/user/company", (req, res) => {

    let response = {
        user : createUser(),
        company : createComp()
    }
    
    res.json(response);

})

app.listen(port, () => console.log('Listening on port: ${port}'));