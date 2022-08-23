const toDoInput = document.querySelector("#todo-form input:first-child");
const toDoAddButton = document.querySelector("#todo-form input:last-child");
const toDoList = document.querySelector("#todo-List");

// list 추가
function paintList(addList) {
  addList.preventDefault();
  const addedList = toDoInput.value;
  // 입력창 공백 여부 체크
  if (addedList === "") {
    // input창 입력 없이 '+'버튼 클릭시 경고창 출력
    alert("Please write a to-do list:)");
    return;
  } else {
    // 목록을 추가하고 html로 보냄
    const li = document.createElement("li");
    li.innerText = addedList;
    toDoList.appendChild(li);
    toDoList.classList.add("list-align");
    toDoInput.value = "";

    // 완료 체크박스
    const checkList = document.createElement("input");
    li.prepend(checkList);
    checkList.setAttribute("type", "checkbox");
    checkList.addEventListener("change", checkedList);

    // 추가 된 각 목록에 삭제 버튼 추가
    const removeButton = document.createElement("button");
    li.appendChild(removeButton);
    removeButton.innerText = "x";
    removeButton.classList.add("list-padding");
    removeButton.addEventListener("click", removeList);
  }
}

// list 추가 버튼 이벤트 리스너 추가
toDoAddButton.addEventListener("click", paintList);

// 완료 목록 줄 긋기
function checkedList(event) {
  const checkEvent = event.target.parentElement;
  checkEvent.classList.toggle("checked");
}

// 목록 삭제
function removeList(event) {
  const removeEvent = event.target.parentElement;
  removeEvent.remove();
}
