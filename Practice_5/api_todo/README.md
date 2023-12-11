1. Create a new react-vite project using the command
   npx create-vite@latest
   project-name: api_todo

2. Install a package called axios

- Import the necessary files and libraries for the application.
- Define a function called "App" that will serve as the main component of the application.
- Inside the "App" function, create a state variable called "data" and initialize it as an empty array.
- Use the "useEffect" hook to make an HTTP GET request to the specified URL ('https://jsonplaceholder.typicode.com/posts') when the component mounts.
- If the request is successful, log the response data to the console and update the "data" state variable with the received data.
- If there is an error, log the error to the console.
- Create a new array called "arr" by mapping over the "data" array and returning a table row element for each item in the "data" array.
- Each table row should have three table data elements containing the "id", "title", and "body" properties of the corresponding item in the "data" array.
- Render the "arr" array inside a table element, with table headers for "ID", "Title", and "Body".
- Return the entire component wrapped in a div element with the class name "App".
- Export the "App" component as the default export of the module.
