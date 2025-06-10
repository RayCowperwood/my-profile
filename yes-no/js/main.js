const btn = document.getElementById("click-to-random");
const answer = document.querySelector(".answer");
const rotator = document.querySelector(".output-area");
console.log(btn);
console.log(answer);
btn.addEventListener("click", () => {
  const number = Math.random();
  if (number > 0.5) {
    console.log(number);
    rotator.classList.add("output-area-rotate");
    setTimeout(() => {
      answer.textContent = "YES";
      rotator.classList.remove("output-area-rotate");
      console.log(number);
    }, 2500);
    setTimeout(() => {
      console.log(number);
      answer.textContent = "";
      rotator.classList.remove("output-area-rotate");
    }, 4000);
  } else {
    rotator.classList.add("output-area-rotate");
    setTimeout(() => {
      console.log(number);
      answer.textContent = "NO";
      rotator.classList.remove("output-area-rotate");
    }, 2500);
    setTimeout(() => {
      console.log(number);
      answer.textContent = "";
      rotator.classList.remove("output-area-rotate");
    }, 4000);
  }
});
