import "./styles.css";

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
//id가 없이 class만 있을 경우 querySelector로 찾을 수 있고 class를 선택할 때는 '.'을 입력하여 사용한다

open.onclick = () => {
  modal.style.display = "flex";
};

close.onclick = () => {
  modal.style.display = "none";
};
