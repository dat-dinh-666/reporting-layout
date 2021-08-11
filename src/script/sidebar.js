const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.addEventListener("DOMContentLoaded", function () {
  const sidebarItems = $$(".sidebar__inner__item");

  sidebarItems.forEach((item) => {
    item.addEventListener("click", function handleSidebarItemClick() {
      this.classList.toggle("sidebar__inner__item--active");
    });
  });

  const currentYear = new Date().getFullYear();
  $(".sidebar__inner__footer span").textContent = currentYear;
});
