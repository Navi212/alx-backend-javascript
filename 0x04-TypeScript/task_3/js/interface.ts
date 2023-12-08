/*
Create a directory called task_3 and copy these configuration files into it:
package.json, webpack.config.js, tsconfig.json.
The first part of will require that you build an interface and a type.
Inside a file named interface.ts:
*/

// Create a type RowID and set it equal to number
export type RowID = number;

// Create an interface RowElement that contains these 3 fields
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}