let tasksArray = [];

function getInput() {
  let inputData = document.getElementById("taskInput").value;
  tasksArray.push(inputData);
  console.log(tasksArray);

  // div for task
  const newDiv = document.createElement("div");
  const taskNumber = tasksArray.length;
  newDiv.setAttribute("id", `task.${taskNumber}`);

  // p element
  const newParagraph = document.createElement("p");
  const newTask = document.createTextNode(`${taskNumber}. ${inputData}`);
  newParagraph.appendChild(newTask);

  // button element
  const moveButton = document.createElement("button");
  moveButton.textContent = "Przesuń";
  moveButton.setAttribute("id", `button.${taskNumber}`);
  moveButton.addEventListener("click", () => moveTask(taskNumber));

  newDiv.appendChild(newParagraph);
  newDiv.appendChild(moveButton);

  let toDoColumn = document.getElementById("toDoColumn");
  toDoColumn.appendChild(newDiv);

  function moveTask() {
    if (moveButton.textContent === "Przesuń") {
      currentColumn.appendChild(newDiv);
      moveButton.textContent = "Zakończ";
    } else if (moveButton.textContent === "Zakończ") {
      doneColumn.appendChild(newDiv);
      moveButton.textContent = "Usuń";
    } else if (moveButton.textContent === "Zakończ") {
      doneColumn.appendChild(newDiv);
      moveButton.textContent = "Usuń";
    }
  }
}
