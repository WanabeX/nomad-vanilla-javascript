const clock = document.querySelector("h2#clock");

function getTime() {
  const date = new Date(); //한국 표준시를 불러옴
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getTime(); //function을 선 호출 해줌으로써 시간이 바로 출력되도록 함. 호출 없이는 00:00:00 출력후에 시간 호출 됨
setInterval(getTime, 1000); //시, 분, 초의 Interval을 세팅한다
