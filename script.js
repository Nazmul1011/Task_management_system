// Define the backend URL here
const backendUrl = "http://localhost/database_project/backend.php"; // Replace this URL with the actual URL of your backend script

document.addEventListener("DOMContentLoaded", function() {
  const taskForm = document.getElementById("taskForm");
  const taskList = document.getElementById("taskList");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;
    addTask(taskTitle, taskDescription);
    taskForm.reset();
  });

  function addTask(title, description) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    fetch(backendUrl, {
      method: "POST",
      body: formData
    })
      .then(response => response.text())
      .then(message => {
        console.log(message);
        getTasks();
      })
      .catch(error => console.error("Error:", error));
  }

  // Use event delegation for handling "Edit" and "Delete" button clicks
  taskList.addEventListener("click", function(event) {
    const target = event.target;
    if (target.tagName === "BUTTON" && target.classList.contains("edit")) {
      editTask(target);
    } else if (target.tagName === "BUTTON" && target.classList.contains("delete")) {
      deleteTask(target);
    }
  });

  function editTask(button) {
    const row = button.parentNode.parentNode;
    const id = row.dataset.taskId;
    const title = row.querySelector("td:nth-child(1)").textContent;
    const description = row.querySelector("td:nth-child(2)").textContent;

    const newTitle = prompt("Edit Task Title:", title);
    const newDescription = prompt("Edit Task Description:", description);

    if (newTitle !== null && newDescription !== null) {
      const formData = new FormData();
      formData.append("edit_id", id);
      formData.append("title", newTitle);
      formData.append("description", newDescription);

      fetch(backendUrl, {
        method: "POST",
        body: formData
      })
        .then(response => response.text())
        .then(message => {
          console.log(message);
          getTasks();
        })
        .catch(error => console.error("Error:", error));
    }
  }

  function deleteTask(button) {
    const row = button.parentNode.parentNode;
    const id = row.dataset.taskId;

    const formData = new FormData();
    formData.append("delete_id", id);

    fetch(backendUrl, {
      method: "POST",
      body: formData
    })
      .then(response => response.text())
      .then(message => {
        console.log(message);
        getTasks();
      })
      .catch(error => console.error("Error:", error));
  }

  function getTasks() {
    fetch(backendUrl)
      .then(response => response.json())
      .then(tasks => {
        displayTasks(tasks);
      })
      .catch(error => console.error("Error:", error));
  }

  function displayTasks(tasks) {
    taskList.innerHTML = "";
    tasks.forEach(task => {
      const newRow = document.createElement("tr");
      newRow.dataset.taskId = task.id;
      newRow.innerHTML = `
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </td>
      `;
      taskList.appendChild(newRow);
    });
  }

  // Load tasks on page load
  getTasks();
});
