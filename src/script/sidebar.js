const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.addEventListener("DOMContentLoaded", function () {
  const sidebarItems = $$(".sidebar__inner__item");

  sidebarItems.forEach((item) => {
    item.addEventListener("click", function handleSidebarItemClick() {
      sidebarItems.forEach((item) => {
        if (item.classList.contains("sidebar__inner__item--active")) {
          item.classList.remove("sidebar__inner__item--active");
        }
      });
      this.classList.toggle("sidebar__inner__item--active");
    });
  });

  const currentYear = new Date().getFullYear();
  $(".sidebar__inner__footer span").textContent = currentYear;
});
