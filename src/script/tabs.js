import $ from "jquery";

(function ($) {
  $("[data-tab-wrapper]")
    .find("[data-tab]")
    .on("click", function () {
      const tab_id = $(this).attr("data-tab-id");
      $(this)
        .closest("[data-tab-wrapper]")
        .find("[data-tab]")
        .removeAttr("data-active");
      $(this)
        .closest("[data-tab-wrapper]")
        .find("[data-tab-content]")
        .removeAttr("data-active");
      $(this).attr("data-active", true);
      $(this)
        .closest("[data-tab-wrapper]")
        .find(`[data-tab-id=${tab_id}]`)
        .attr("data-active", true);
    });
})($);
