// import express from "express";
const express = require("express");

const app = express(); //INSTANCIAR A EXPRESS

const port = 4000;

app.listen(port, () => {
  console.log("Estoy escuchando el puerto " + port);
});
