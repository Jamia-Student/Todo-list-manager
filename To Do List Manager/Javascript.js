let form = document.getElementById("form");
let task = document.getElementById("task_title");
let priority = document.getElementById("priority");
let date = document.getElementById("myDate");
let status = document.getElementById("status");
let Priority = document.getElementById("Priority");
let toggle = document.getElementById("toggle");
let body = document.getElementById("body");
let head = document.getElementById("head");

let container = document.querySelector("body > div:last-of-type");
// let help = "";
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (task.value.trim() === "") return;

  let div = document.createElement("div");
  div.className = "flex items-start gap-4 bg-white rounded-lg p-4 shadow border";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "mt-1";

  const content = document.createElement("div");
  content.className = "flex-1";

  const title = document.createElement("h3");
  title.textContent = task.value;
  title.className = "font-semibold";

  const meta = document.createElement("div");
  meta.className = "text-sm text-gray-500 flex gap-2 items-center";

  const badge = document.createElement("span");
  badge.textContent = priority.value;
  badge.className = `px-2 py-1 rounded-full text-xs font-medium text-white ${
    priority.value === "High"
      ? "bg-red-500"
      : priority.value === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500"
  }`;

  const dueDate = document.createElement("span");
  dueDate.textContent = new Date(date.value).toLocaleDateString("en-GB");

  const now = new Date();
  const deadline = new Date(date.value);
  const diffTime = deadline - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const dueText = document.createElement("span");
  dueText.className = "flex items-center gap-1 text-red-500 text-xs font-medium";
  if (diffDays < 0) {
    dueText.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Overdue`;
  } else {
    dueText.innerHTML = `<i class="fa-regular fa-clock"></i> Due in ${diffDays} day${diffDays > 1 ? "s" : ""}`;
  }

  meta.append(badge, dueDate, dueText);

  const actions = document.createElement("div");
  actions.className = "flex gap-2";

  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
  editBtn.className = "text-blue-500 hover:text-blue-700";

  const delBtn = document.createElement("button");
  delBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
  delBtn.className = "text-red-500 hover:text-red-700";

  editBtn.onclick = () => {
    task.value = title.textContent;
    priority.value = badge.textContent;
    date.value = new Date(deadline).toISOString().slice(0, 10);
    container.removeChild(div);
  };

  delBtn.onclick = () => container.removeChild(div);

  actions.append(editBtn, delBtn);
  content.append(title, meta);
  div.append(checkbox, content, actions);
  container.appendChild(div);
  // help = priority.value;
  form.reset();
});
// let stat = "";
// status.addEventListener("change",function(event){
//   stat =  event.target.value;
// });
// let priori = "";
// Priority.addEventListener("change",function(event){
//   priori =  event.target.value;
// });

// if(priori === help){
//   container =
// }

let keydownAdded = false;

task.addEventListener("blur", function (event) {
  if (event.target.value.trim() === "") {
    event.target.style.backgroundColor = "red";
    event.target.placeholder = "Please fill, can't be empty";

    if (!keydownAdded) {
      task.addEventListener("keydown", function () {
        task.style.backgroundColor = "white";
        task.placeholder = "Enter Task Title";
      });
      keydownAdded = true;
    }
  }
});
let count=0;
toggle.onclick = function(){
    
    if(count%2 == 0){
        body.classList.add("bg-black");
        head.classList.add("text-white");
        toggle.textContent = "Dark Mode";
    }
    else{
        body.classList.remove("bg-black");
        head.classList.remove("text-white");
        toggle.textContent = "Light Mode";
    }
    count+=1;
};
