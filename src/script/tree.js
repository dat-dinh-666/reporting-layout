import $ from "jquery";

window.$ = $;
(function ($) {
  $("[data-tree]")
    .find("[data-tree-row][data-has-subtree]")
    .find("[data-tree-row-title]")
    .on("click", function () {
      if ($(this).closest("[data-tree-row]").attr("data-tree-active")) {
        $(this).closest("[data-tree-row]").removeAttr("data-tree-active");
      } else {
        $(this).closest("[data-tree-row]").attr("data-tree-active", true);
      }
    });

  $("[data-tree]")
    .find("[data-tree-row][data-has-subtree]")
    .find("[data-tree-row-title]")
    .on("mouseover", function () {
      $(this).attr("data-tree-hover", true);
    })
    .on("mouseout", function () {
      $(this).removeAttr("data-tree-hover");
    });
})($);
