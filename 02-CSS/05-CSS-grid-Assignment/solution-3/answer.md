
grid-auto-row and grid-auto-column are CSS properties used in CSS Grid Layout to specify the size and behavior of rows and columns that are implicitly created by the grid when grid items are placed into cells that are not explicitly defined.

Here's an explanation of each property along with code examples:

grid-auto-row:

This property defines the size of implicitly created rows in a grid container.
Example:


.grid-container {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-auto-rows: 50px; /* Implicit rows will have a height of 50px */
}
In this example, the grid container has two explicit columns of 100px each. If more grid items are placed into the grid than there are cells defined by the explicit columns, additional rows will be created implicitly. The height of these implicitly created rows will be 50px as specified by grid-auto-rows.

grid-auto-column:

This property defines the size of implicitly created columns in a grid container.
Example:


.grid-container {
    display: grid;
    grid-template-rows: 50px 50px;
    grid-auto-columns: 100px; /* Implicit columns will have a width of 100px */
}
In this example, the grid container has two explicit rows of 50px each. If more grid items are placed into the grid than there are cells defined by the explicit rows, additional columns will be created implicitly. The width of these implicitly created columns will be 100px as specified by grid-auto-columns.

Here's an example HTML structure with these CSS rules applied:


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grid Layout Example</title>
<style>
.grid-container {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-auto-rows: 50px;
}

/* Uncomment this block for grid-auto-column example */
/*
.grid-container {
    display: grid;
    grid-template-rows: 50px 50px;
    grid-auto-columns: 100px;
}
*/

.grid-item {
    background-color: lightblue;
    border: 1px solid black;
}
</style>
</head>
<body>

<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <!-- Add more grid items here if needed -->
</div>

</body>
</html>
In this example, the .grid-container div represents a grid container, and each div with the class .grid-item represents a grid item. Depending on whether you're using grid-auto-row or grid-auto-column, uncomment the respective CSS block to see the effect. You'll notice how implicitly created rows or columns behave based on the specified sizes.