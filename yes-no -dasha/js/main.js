const btn = document.getElementById("click-to-random");
const answer = document.querySelector(".answer");
const rotator = document.querySelector(".output-area");
const wrapper = document.querySelector(".wrapper");

btn.addEventListener("click", () => {
  const number = Math.random();
  const result = number > 0.5 ? "YES" : "NO";

  console.log("Number:", number);
  rotator.classList.add("output-area-rotate");

  if (result === "NO") {
    // Через 2 секунды добавить класс
    setTimeout(() => {
      wrapper.classList.add("wrapperBad");
    }, 2000);

    // Удалить класс через 4 секунды (т.е. через 2 после добавления)
    setTimeout(() => {
      wrapper.classList.remove("wrapperBad");
    }, 4000);
  }

  setTimeout(() => {
    answer.textContent = result;
    rotator.classList.remove("output-area-rotate");
  }, 2500);

  setTimeout(() => {
    answer.textContent = "";
  }, 4000);
});
