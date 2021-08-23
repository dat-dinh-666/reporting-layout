import $ from "jquery";

function getClassByValue(value) {
  if (value === 0) {
    return "text-default";
  } else if (value <= 74) {
    return "text-very-low";
  } else if (value <= 81) {
    return "text-low";
  } else if (value <= 89) {
    return "text-neutral";
  } else if (value <= 95) {
    return "text-high";
  } else if (value <= 100) {
    return "text-very-high";
  }
}

function getStyleByValue(value) {
  let rotate = 0,
    color = "text-high";

  if (value < 0) {
    rotate = 90;
    color = "text-very-low";
  } else if (value === 0) {
    color = "text-default";
    rotate = 45;
  }

  return {
    color,
    rotate,
  };
}

$("table.table.detailed tbody tr td:not(:first-child,:last-child)").each(
  (_, elem) => {
    const value = +elem.textContent.slice(0, -1);
    $(elem).addClass(getClassByValue(Math.ceil(value)));
  }
);

$("table.table.detailed tbody tr:not(.details) td:last-child").each(
  (_, elem) => {
    const value = +elem.textContent.slice(0, -1);

    const { color, rotate } = getStyleByValue(value);

    $(elem).addClass(color)
      .append(`<svg class=${color} style="width: 18px; height: 18px; transform: rotate(${rotate}deg)" viewBox="0 0 24 24">
                <path
                fill="currentColor"
                d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                />
              </svg>`);
  }
);

$("table.table.detailed tr.master").each((_, row) => {
  $(row)
    .find("button[data-accordion]")
    .each((_, button) => {
      $(button).on("click", () => {
        $(row)
          .next("tr.details")
          .attr("hidden", function (_, hidden) {
            if (hidden) {
              return false;
            }
            return true;
          });
      });
    });
});
