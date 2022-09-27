// 반복하는 텍스트
const content = "Box Office";
const text_office = document.querySelector(".text_office");
let i = 0;

function typing() {
  let txt = content[i++];
  text_office.innerHTML += txt;
  if (i > content.length) {
    text_office.textContent = "";
    i = 0;
  }
}
setInterval(typing, 200);
