
## Task Management System
The Task Management System is a simple web application built to manage tasks. It allows users to add, edit, and delete tasks. The system is designed to interact with a backend PHP script to handle task data and store it in a MySQL database.

## Features
- Add new tasks with a title and description
- Edit existing tasks
- Delete tasks from the system
- Display a list of all tasks in a tabular format
  
## Technologies Used
The project is built using the following technologies:

- HTML
CSS
JavaScript
PHP (for backend)
MySQL (for database)
Setup Instructions
Clone the repository to your local machine.
Install XAMPP or any other local development environment.
Place the project folder inside the htdocs folder of your XAMPP installation.
Start the Apache and MySQL servers from XAMPP control panel.
Import the task_management.sql file into your MySQL database to create the necessary tasks table.
Configure the database connection parameters in backend.php.
Open a web browser and access the project using http://localhost/your_project_folder/index.html.
Backend (backend.php)
The backend.php file handles the server-side operations. It establishes a connection to the database, receives data from the frontend, performs CRUD operations (Create, Read, Update, Delete) on tasks, and returns task data in JSON format.

Frontend (index.html and script.js)
The index.html file defines the frontend structure of the Task Management System. It contains a form to add new tasks and a table to display existing tasks. The script.js file contains the JavaScript code responsible for handling user interactions, making AJAX requests to the backend, and dynamically updating the task list.

Contributing
Contributions to this project are welcome. Feel free to open issues or submit pull requests for improvements or bug fixes.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute the code as per the terms of the license.

Acknowledgments
Special thanks to OpenAI for providing the AI-powered language model that generated this readme.
