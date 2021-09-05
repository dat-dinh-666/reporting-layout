import $ from "jquery";

const sidebarItems = $(".sidebar__inner__item");

sidebarItems.each((_, item) => {
  $(item).on("click", function handleSidebarItemClick() {
    $(sidebarItems).each((_, item) => {
      if ($(item).hasClass("sidebar__inner__item--active")) {
        $(item).removeClass("sidebar__inner__item--active");
      }
    });

    $(this).toggleClass("sidebar__inner__item--active");
  });
});

const currentYear = new Date().getFullYear();
$(".sidebar__inner__footer span").textContent = currentYear;

const $navWrapper = $(".nav-wrapper");

$navWrapper.on("scroll", () => {
  if ($navWrapper.scrollLeft() !== 0) {
    $(".sidebar__arrow--prev").show();
  } else {
    $(".sidebar__arrow--prev").hide();
  }

  let newScrollLeft = $navWrapper.scrollLeft(),
    width = $navWrapper.outerWidth(),
    scrollWidth = $navWrapper.get(0).scrollWidth;

  if (scrollWidth - newScrollLeft == width) {
    $(".sidebar__arrow--next").hide();
  } else {
    $(".sidebar__arrow--next").show();
  }
});

const offset = 80;

const getDirection = (direction) => (direction === "prev" ? -1 : 1);
const getOffset = (direction) =>
  $navWrapper.scrollLeft() + offset * getDirection(direction);

const animateScroll = (direction) => {
  $navWrapper.animate(
    {
      scrollLeft: getOffset(direction),
    },
    400
  );
};

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const timeout = 400;

$(".sidebar__arrow--prev").on(
  "click",
  debounce(() => {
    animateScroll("prev");
  }, timeout)
);

$(".sidebar__arrow--next").on(
  "click",
  debounce(() => {
    animateScroll("next");
  }, timeout)
);
