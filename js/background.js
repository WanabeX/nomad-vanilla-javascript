const body = document.querySelector("body");

// 이미지 개수 지정
const IMG_NUMBER = 5;

//랜덤 숫자 생성
const getRandomNumber = Math.floor(Math.random() * IMG_NUMBER);

//이미지 불러오기
function paintImage(imgNumber) {
    const backgroundImages = `url('img/${imgNumber + 1}.jpg')`;
    body.style.backgroundImage = backgroundImages;
    body.classList.add('setBackround');
}

//함수 실행
function init() {
    const getNumber = getRandomNumber;
    paintImage(getNumber);
}

init();