/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const ul = document.querySelector("ul");
const button = document.querySelectorAll("button");
const visual = document.querySelector(".visual img");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");

function handleClick(e) {
  e.preventDefault();
  const li = e.target.closest("li");

  // const list = Array.from(ul.children);
  const list = [...ul.children];

  list.map((li) => {
    li.classList.remove("is-active");
  });

  if (!li) return;

  li.classList.add("is-active");
}

function handleButtonClick(e) {
  e.preventDefault();
  const button = e.target.closest("button");

  // let names = data.map((item) => {
  //   return item.color;
  // });

  const imgList = [...button.children];

  imgList.forEach((img) => {
    visual.src = img.src;
    visual.alt = img.alt;
    h1.textContent = img.alt;
  });
}

ul.addEventListener("click", handleClick);

button.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
