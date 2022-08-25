const toDoInput = document.querySelector("#todo-form input:first-child");
const toDoAddButton = document.querySelector("#todo-form input:nth-child(2)");
const toDoList = document.querySelector("#todo-list");
const errorMsg = document.querySelector("#error-msg");

// list 추가
function paintList(addList) {
  addList.preventDefault();
  const addedList = toDoInput.value;
  // 입력창 공백 여부 체크
  if (addedList === "") {
    // 오류 메세지 출력
    errorMsg.setAttribute("style", "visibility:visible");
    setTimeout(removeAlert, 3000);
  } else {
    // list를 추가하고 html로 보냄
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

    // 추가 된 각 list에 삭제 버튼 추가
    const removeButton = document.createElement("button");
    li.appendChild(removeButton);
    removeButton.innerText = "x";
    removeButton.classList.add("list-padding");
    removeButton.addEventListener("click", removeList);
  }
}

// list 추가 버튼 이벤트 리스너 추가
toDoAddButton.addEventListener("click", paintList);

// 완료list 줄 긋기
function checkedList(event) {
  const checkEvent = event.target.parentElement;
  checkEvent.classList.toggle("checked");
}

// list 삭제
function removeList(event) {
  const removeEvent = event.target.parentElement;
  removeEvent.remove(event);
}

// 오류 메세지 숨김
function removeAlert() {
  const removeAlertEvent = errorMsg;
  removeAltEvent.setAttribute("style", "visibility:hidden");
}
