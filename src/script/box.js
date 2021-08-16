import $ from "jquery";

function initBox() {
  const box_class = ".box";
  const toggle_class = ".maxsize";
  const all_boxes = $(box_class);
  all_boxes.each((_, elm) => {
    const toggle_btn = $(elm).find(toggle_class);
    toggle_btn.on("click", function (e) {
      const target = $(e.target);
      target.parents(box_class).toggleClass("active");
    });
  });
}

initBox();
