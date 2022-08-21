// 이미지 목록
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// 랜덤 숫자 생성
const chosenImage = images[Math.floor(Math.random() * images.length)];

// img element 추가
const bgImage = document.createElement("img");

// img element에 src추가
bgImage.src = `img/${chosenImage}`;

// img를 html body태그에 추가
document.body.appendChild(bgImage);