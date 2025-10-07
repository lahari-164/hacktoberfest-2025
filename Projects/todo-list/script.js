const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";

        function editTask(button) {
  const task = button.parentElement.querySelector('span');
  const newText = prompt('Edit your task:', task.textContent);
  if (newText !== null && newText.trim() !== '') {
    task.textContent = newText.trim();
  }
}

    }
});
