"use strict";
exports.__esModule = true;
var CRUD = require("./curd");
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = CRUD.insertRow();
var updatedRow = CRUD.updateRow(row, 23);
