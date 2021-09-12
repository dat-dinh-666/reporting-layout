import $ from "jquery";

(function ($) {
  $("[data-tab-wrapper]")
    .find("[data-tab]")
    .on("click", function () {
      const tab_id = $(this).attr("data-tab-id");
      $(this)
        .parents("[data-tab-wrapper]")
        .find("[data-tab]")
        .removeAttr("data-active");
      $(this)
        .parents("[data-tab-wrapper]")
        .find("[data-tab-content]")
        .removeAttr("data-active");
      $(this).attr("data-active", true);
      $(this)
        .parents("[data-tab-wrapper]")
        .find(`[data-tab-id=${tab_id}]`)
        .attr("data-active", true);
    });
})($);
