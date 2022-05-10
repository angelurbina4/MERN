const { faker } = require('@faker-js/faker');
const express = require('express');

const app = express();

const objetoUsuario = () => ({
    _id: faker.datatype.uuid(),
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    telefono:faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const objetoEmpresa = () => ({
    _id: faker.datatype.uuid(),
    nombre: faker.company.companyName(),
    direccion:{
        calle: faker.company.companyName(),
        ciudad: faker.address.city(),
        estado: faker.address.state(),
        cp: faker.address.zipCode(),
        pais: faker.address.country()
    }
});

const objetoUsuarioEmpresa = () => ({
    _id: faker.datatype.uuid(),
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    telefono:faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    _id: faker.datatype.uuid(),
    nombre: faker.company.companyName(),
    direccion:{
        calle: faker.company.companyName(),
        ciudad: faker.address.city(),
        estado: faker.address.state(),
        cp: faker.address.zipCode(),
        pais: faker.address.country()
    }
})



app.get("/api/users/new", (req, res) => {
    const nuevoUsuario = objetoUsuario();
    res.json(nuevoUsuario);
});

app.get("/api/companies/new", (req, res) => {
    const nuevaEmpresa = objetoEmpresa();
    res.json(nuevaEmpresa);
});

app.get("/api/user/company", (req, res) => {
    const nuevoUsuarioEmpresa = objetoUsuarioEmpresa();
    res.json(nuevoUsuarioEmpresa);
})


app.listen(8000, () => console.log("Servidor corriendo")); //Ejecuntando servidor