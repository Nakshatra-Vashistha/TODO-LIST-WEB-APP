# Todo List Web App

This is a simple web-based todo list application that allows you to add and manage your tasks. It's built using HTML, CSS, and JavaScript, focusing on practicing arrays and loops.

## Features

1. Add new tasks with a name and due date.
2. View your list of tasks.
3. Check off completed tasks.
4. Easily manage your todo list.

## Getting Started
To get started with the todo list web app, follow these steps:

1. Clone this repository to your local machine:
    bash 
       git clone <repository-url>

2. Open the index.html file in your web browser.

## Usage

1. Enter the name of the task in the "ToDo name" input field.
2. Select a due date using the date picker.
3. Click the "Add" button to add the task to your list.
4. Your task will appear in the list below.
5. Once you've completed a task, you can check it off by clicking on it.


## Example
Here's an example of how the HTML structure of the web app looks:
html 

<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags and stylesheets -->
</head>
<body>
  <p>Todo List Practice 1</p>
  <div class="inputgrid">
    <div class="input-container">
      <input placeholder="ToDo name" class="js-name-input">
      <input type="date" class="js-due-date-input">
      <button onclick="addtodo()" class="add-todo-button">Add</button>
    </div>
  </div>
  
  <div class="js-todo-list todo-grid"></div>

  <script src="jsusingforeach.js"></script>
</body>
</html>


## Author
Nakshatra Vashistha

## Contributing
If you'd like to contribute to this project, please open an issue or create a pull request with your changes. We welcome contributions from the community.

## Feedback
If you have any feedback or suggestions, please feel free to create an issue or contact us.

Happy task management!