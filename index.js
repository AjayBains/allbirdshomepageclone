const tabs = document.querySelector(".tabs");
const tabsContent = document.querySelectorAll(".tabs__content--info");

// console.log(tabsContent);
const handleClick = (e) => {
  const clicked = e.target.dataset.tab;
  console.log(clicked);
  if (!clicked) return;
  tabsContent.forEach((tab) => tab.classList.add("hidden"));

  const tab = document.querySelector(`.tabs__content--${clicked}`);

  tab.classList.remove("hidden");

  // console.log(tab);
};
tabs.addEventListener("click", handleClick);

// SLIDER JS

const card = document.querySelectorAll(".collections__items--card");
const collectionItems = document.querySelector(".collections__items");
const btnLeft = document.querySelector(".btn__left");
const btnRight = document.querySelector(".btn__right");
let count = 0;
let distance;

const handleLeftClick = () => {
  if (count > 0 && count <= card.length / 2) {
    distance = (count - 1) * 400;
    collectionItems.style.transform = `translateX(-${distance}px)`;
    count--;
  }
};
const handleRightClick = () => {
  if (count < card.length / 2) {
    distance = (count + 1) * 400;
    collectionItems.style.transform = `translateX(-${distance}px)`;
    count++;
  }
};

btnLeft.addEventListener("click", handleLeftClick);
btnRight.addEventListener("click", handleRightClick);
