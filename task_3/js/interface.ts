//Create an interface called RowElement
interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}

//Create a type called RowID
type RowID = number

export { RowElement, RowID };