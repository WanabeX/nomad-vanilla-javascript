const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* username 입력 후 greeting 출력*/
function onLoginSubmit(event) {
  event.preventDefault(); //submit의 기본동작을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME); //'hidden' 클래스를 이용하여 input창을 숨겨줌
  const username = loginInput.value; //input창의 입력값을 변수로 저장함
  localStorage.setItem(USERNAME_KEY, username); //localStorage에 username을 저장함
  paintGreetings(username); //input에 submit된 user정보를 받음
}

function paintGreetings() {
  greeting.innerText = `Hello ${username}!`; //미리 생성해둔 빈 h1에 "hello username!" 텍스트를 넣어줌
  greeting.classList.remove(HIDDEN_CLASSNAME); //h1의 'hidden' class를 삭제
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

/* 저장된 username 여부에 따른 화면 출력 */
if (savedUsername === null) {
  //form을 보여줌
  loginForm.classList.remove(HIDDEN_CLASSNAME); //form의 'hidden' class를 삭제
  loginForm.addEventListener("submit", onLoginSubmit); //input 값이 submit되면 'onLoginSubmit'함수가 실행됨
} else {
  //greeting을 보여줌
  paintGreetings(savedUsername); //localStorage에 저장된 user정보를 받음
}
