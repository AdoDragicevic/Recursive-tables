# Recursive Tables

### VISIT IT ON NETLIFY
https://records-ado.netlify.app/

### WHAT I LEARNED
Creating this app was an excelent exercise in applying recursion and memoization for Big O and re-render optimizations. The app works with any data that follows the simple shema specified below this paragraph. There is no guarantee any table or table row will contain a unique ID, and number of values is unknown. Therefore, ID is created in runtime, in a way to allow for O(1) space complexity access and deletion of any table row. I exported numerous functionalities into the helpers directory with pure functions.

### FUNCTIONALITIES
* displaying tables based on provided JSON data
* works with any supplied data respecting the data schema described below
* the data object represents table columns and can have a variable number of key-value pairs
* Rows that contain chilren tables are expandable
* Each row is deletable
* Memoization and recursion prevent unnecesary re-renders
* Run-time ID is generated for each table row, to optimize time complexity of row deletion
* Deleting last table row in a table deletes entire table
* Width of columns is calculated in order to apply appropriate witdth based on provided data
* local storage

### DATA SCHEMA
interface TableRow {
  data: Record<string, string>;
  kids: Record<string, { records: TableRow[] }>;
}

### TECH
* TypeScript
* React (Custom hooks, Context, Reducer)
* Sass, BEM, 7 in 1 architecture