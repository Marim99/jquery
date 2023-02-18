const newToDo = $(".newToDo");
const toDoText = $("#inputToDo");
const ToDoList = $(".list-group");
let tasks = [];
$(() => {
  $(newToDo).on("click", (e) => {
    e.preventDefault();
    let task = toDoText.val();
    tasks.push(task);
    $(toDoText).val("");
    renderTask(task);

    console.log(tasks);
  });
  $(ToDoList).on("click", "span", {}, (e) => {
    if ($(e.target).hasClass("delete-icon")) {
      $(e.target).parents(".list-group-item").addClass("delete");
      setTimeout(() => {
        $(e.target).parents(".list-group-item").remove();
      }, 800);
    }
    if ($(e.target).hasClass("done-icon")) {
      console.log("hisu");
      $(e.target)
        .parent()
        .siblings("h5")
        .css("text-decoration", "line-through");
    }
  });
  const renderTask = (task) => {
    ToDoList.append(`
    <li class="list-group-item task mt-3">
      <div class="task-item">
        <h5 class="toDo__text">${task}</h5>
        <div class="icons">
          <span class="task-icon done-icon">✔️</span>
          <span class="task-icon delete-icon">❌</span>
        </div>
      </div>
    </li>`);
  };
});
