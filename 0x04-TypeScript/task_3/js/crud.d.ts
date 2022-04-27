import { number } from "yargs";
import { RowID } from "./interface";
import { RowElement } from "./interface"

declare let insertRow:(row:number) =>any;
declare let deleteRow:(rowId: RowID) =>any;
declare let updateRow:(rowId:RowID, row:number) =>any;

