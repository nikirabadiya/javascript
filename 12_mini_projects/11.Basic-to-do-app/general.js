const toDoForm = document.querySelector(".to-do-form");
const errordisplay = document.querySelector(".error");
const input = document.querySelector(".todo-input");
const filterList = document.querySelector(".filter-list");
const tableBody = document.querySelector(".todo-list-table tbody");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskId = 0;

renderTasks();

function updateNoResultDisplay() {
	const rows = tableBody.querySelectorAll("tr");
	const noResultRow = document.querySelector(".no-result");

	// If there are no task rows
	if (rows.length === 0) {
		if (!noResultRow) {
			const newRow = document.createElement("tr");
			newRow.classList.add("no-result");
			newRow.innerHTML = `<td colspan="3" class="center no-result">No list available!</td>`;
			tableBody.appendChild(newRow);
		}
	} else {
		// If there are tasks, remove the "no result" row
		if (noResultRow) {
			noResultRow.remove();
		}
	}
}

function addItems() {
	taskId++;
	const inputValue = input.value.trim();

	if (inputValue.length === 0) {
		errordisplay.textContent = "Please enter a to-do item!";
		return;
	}

	errordisplay.textContent = "";

	const task = {
		id: taskId,
		name: inputValue,
		completed: false,
	};

	tasks.push(task);
	saveTasks();
	renderTasks();
	input.value = "";
}

function saveTasks() {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
	tableBody.innerHTML = "";

	if (tasks.length === 0) {
		updateNoResultDisplay();
		return;
	}

	const selectedFilter = filterList.value;
	const filteredTasks = tasks.filter((task) => {
		if (selectedFilter === "completed") return task.completed;
		if (selectedFilter === "incompleted") return !task.completed;
		return true;
	});

	filteredTasks.forEach((task) => {
		const taskRow = document.createElement("tr");
		taskRow.classList.toggle("completed", task.completed);
		taskRow.innerHTML = `
			<td class="task-name">
				<div class="checkbox-block">
					<input type="checkbox" id="task-${
						task.id
					}" name="checkItem" class="list-check" ${
			task.completed ? "checked" : ""
		}>
					<label for="task-${task.id}">${task.name}</label>
				</div>
			</td>
			<td class="status">${task.completed ? "Complete" : "Incomplete"}</td>
			<td>
				<button class="delete-btn" data-id="${task.id}">Delete</button>
			</td>
		`;
		tableBody.appendChild(taskRow);
	});
	updateNoResultDisplay();
}

toDoForm.addEventListener("submit", (e) => {
	e.preventDefault();
	addItems();
});

filterList.addEventListener("change", (e) => {
	renderTasks();
});

tableBody.addEventListener("click", (e) => {
	const row = e.target.closest("tr");
	const taskLabel = row?.querySelector("label");
	if (!row || !taskLabel) return;

	const taskIdLabel = taskLabel.getAttribute("for");
	const id = parseInt(taskIdLabel.replace("task-", ""));

	// Delete
	if (e.target.classList.contains("delete-btn")) {
		tasks = tasks.filter((task) => task.id !== id);
		saveTasks();
		renderTasks();
	}

	// Toggle complete
	if (e.target.classList.contains("list-check")) {
		const task = tasks.find((task) => task.id === id);
		if (task) {
			task.completed = e.target.checked;
			saveTasks();
			renderTasks();
		}
	}
});
