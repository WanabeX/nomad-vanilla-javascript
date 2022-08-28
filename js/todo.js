const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOLIST_KEY = "todolist";

let toDoArray = []; //새로고침시 저장된 목록들이 업데이트 될 수 있도록 const가 아닌 let을 사용

// List 저장
function saveToDos() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDoArray));
}

// List 삭제
function deleteToDos(event) {
  const li = event.target.parentElement;
  li.remove();
  //console.log(event);
  //console.log(event.target.parentElement);

  // 삭제된 List를 local storage에서도 삭제
  toDoArray = toDoArray.filter(toDo =>{
    return toDo.id !== parseInt(li.id)
  });
  saveToDos(); // List가 삭제된 상태를 저장
}

// 입력한 List를 화면에 출력 함
function paintTodo(newList) {
  //console.log("i will painted", newList);
  const li = document.createElement("li");
  li.id = newList.id;
  const span = document.createElement("span");
  span.innerText = newList.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDos);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// input 입력값을 paintTodo와 saveToDos함수로 보냄
function hadleToDoSubmit(event) {
  event.preventDefault();
  const newList = toDoInput.value;
  //console.log(toDoInput.value);
  toDoInput.value = "";
  //console.log(newList, toDoInput.value);
  const newListObj = {
    text:newList,
    id: Date.now(),
  };
  toDoArray.push(newListObj);
  //console.log(toDoArray);
  paintTodo(newListObj); // text가 아닌 object를 보냄
  saveToDos(); // List가 추가된 상태를 저장
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

// local storage에 추가 된 문자열을 배열로 변경
const savedToDos = localStorage.getItem(TODOLIST_KEY);
//console.log(savedToDos);

// 새로고침시 local storage에 저장된 List를 불러 옴
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // local storage의 문자열을 배열로 만들어 준다.
  //console.log(parsedToDos);
  toDoArray = parsedToDos; // 배열의 상태를 업데이트 해준다.
  parsedToDos.forEach(paintTodo); // 저장된 배열의 length만큼 paintTodo의 함수를 실행한다.
}
