/// <reference path="./crud.d.ts" />
import { RowID } from "./interface";
import { RowElement } from "./interface"
import * as CRUD from "./curd"

const row: RowElement = {
  firstName:"Guillaume", 
  lastName:"Salva"
}; 

const newRowID: RowID = CRUD.insertRow();

const updatedRow: RowElement = CRUD.updateRow(row, 23);

