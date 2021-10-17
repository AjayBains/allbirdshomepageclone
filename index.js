const tabs = document.querySelector(".tabs");
const tabsContent = document.querySelectorAll(".tabs__content--info");

console.log(tabsContent);
const handleClick = (e) => {
  const clicked = e.target.dataset.tab;
  console.log(clicked);
  if (!clicked) return;
  tabsContent.forEach((tab) => tab.classList.add("hidden"));

  const tab = document.querySelector(`.tabs__content--${clicked}`);

  tab.classList.remove("hidden");

  console.log(tab);
};
tabs.addEventListener("click", handleClick);
