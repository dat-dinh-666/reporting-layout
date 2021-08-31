import $ from "jquery";

(function () {
  const all_collapsible = $(".collapse-toggle");
  all_collapsible.each(function (index, elem) {
    const id = $(elem).attr("data-collapsible-id");
    const collapsible_child = $(elem)
      .parents("[data-collapsible-table]")
      .find(`.collapsible[data-collapsible-id=${id}]`);
    const open_btn = $(elem).find("[data-collapsible-open]");
    const close_btn = $(elem).find("[data-collapsible-close]");
    open_btn.on("click", function () {
      $(collapsible_child).addClass("active");
      $(elem).addClass("active");
    });

    close_btn.on("click", function () {
      $(collapsible_child).removeClass("active");
      $(elem).removeClass("active");
    });
  });

  const expand_all_btn = $("[data-expand-all]");
  expand_all_btn.on("click", function () {
    $(this)
      .parents("[data-collapsible-table]")
      .find(".collapse-toggle")
      .addClass("active");
    $(this)
      .parents("[data-collapsible-table]")
      .find(".collapsible")
      .addClass("active");

    $(this).removeClass("active");
    $(this)
      .parents("[data-collapsible-table]")
      .find("[data-collapse-all")
      .addClass("active");
  });

  const collapse_all_btn = $("[data-collapse-all]");
  collapse_all_btn.on("click", function () {
    $(this)
      .parents("[data-collapsible-table]")
      .find(".collapse-toggle")
      .removeClass("active");
    $(this)
      .parents("[data-collapsible-table]")
      .find(".collapsible")
      .removeClass("active");

    $(this).removeClass("active");
    $(this)
      .parents("[data-collapsible-table]")
      .find("[data-expand-all")
      .addClass("active");
  });
})();
