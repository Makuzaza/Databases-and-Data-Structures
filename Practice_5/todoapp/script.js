// write to-do app

/*
Pseudo-code

- Retrieve a list of items from your computer's local storage. If there are no items, start with an empty list.
- Identify the form, input field, and button on the webpage.
- Save the list of items back to local storage.
- Retrieve the list of items from local storage and convert it back into a list.
- Create a function that makes a new list item on the webpage with the given text.
- When the form is submitted, prevent the page from refreshing.
- Add the text from the input field to the list of items.
- Save the updated list of items to local storage.
- Use the function to create a new list item on the webpage with the text from the input field.
- Clear the input field.
- For each item in the list, use the function to create a new list item on the webpage.
- When the button is clicked, clear all items from local storage.
- While there are still list items on the webpage, remove the first one.
- Clear the list of items.
*/

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let itemsArray = localStorage.getItem('items') 
? JSON.parse(localStorage.getItem('items'))
: [];

// let itemArray = [];
// if (localStorage.getItem('items')) {
//     items = JSON.parse(localStorage.getItem('items'))
// }
// else {
//     items = [];
// }

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.lextContent = text;
    ul.appendChild(li)
};

 form.addEventListener('submit', function (e) {
    e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = '';
 });

 data.forEach((item) => {
   liMaker(item);
   });
   button.addEventListener('click', function () {
   localStorage.clear();
   while (ul.firstChild) {
   ul.removeChild(ul.firstChild);
   }
   itemsArray = [];
});
