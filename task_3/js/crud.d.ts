import { RowID, RowElement } from './interface';

type insertRow = (row: RowElement) => number;
type deleteRow = (rowId: RowID) => void;
type updateRow = (rowId: RowID, row: RowElement) => number;

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;