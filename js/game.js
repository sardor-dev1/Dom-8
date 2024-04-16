const tel = document.querySelector(".tel");
const btn = document.querySelector(".btn");
const collection = document.querySelector(".collection");

const TEL_NUMBERS = [
  "+998 93 629 5722",
  "+998 94 467 0522",
  "+998 94 672 2205",
  "+998 96 452 2045",
  "+998 95 456 2524",
];

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);
  let interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length);
    tel.innerHTML = TEL_NUMBERS[randomNumber];
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    btn.removeAttribute("disabled");
  }, 2500);
});

function createItem(data) {
  while (collection.firstChild) {
    collection.firstChild.removeChild();
  }
  const fragment = document.createDocumentFragment();
  data.forEach((el) => {
    const li = document.createElement("li");
    li.innerHTML = el;
    fragment.appendChild(li);
  });
  collection.appendChild(fragment);
}
createItem(TEL_NUMBERS);

console.log(btn);
