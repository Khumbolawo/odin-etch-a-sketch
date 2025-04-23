# test driven etch a sketch app

## problem

build a simple etch a sketch website. How the site works:

- user enters a number between 1 and 100 and presses a button
- the site builds a grid of squares based on the user's selection using javascript and DOM methods
- the squares must change color when the mouse hovers over them
- the user will be limited to a maximum grid size of 100x100

for extra credit, I want the javascript functions to be test - driven and tested using jest.

## solution

algorithm:

1. Create grid function
   - select container element using dom methods
   - create a for loop to create a number of divs equal to the grid size
   - use flexbox to arrange the divs in a grid
   - append the divs to the container
   - add hover event listeners to the divs to change their color when the mouse hovers over them

2. Create grid form and button
   - create select field for grid size
   - pass grid size to grid function after user selects a grid size using an event listener

3. Clear grid button
   - create button to clear grid
   - add event listener to button to run clear grid function when clicked
  
4. The website
   - have title and description with usage instructions
   - have a grid area clearly marked by a border and text

## test plan

functionality will be tested on the following test cases:

- [x] user can select a grid size and see the grid change
- [x] user can hover their mouse over the grid and see the squares change color
- [x] grid does not exceed 100x100, with a warning message
