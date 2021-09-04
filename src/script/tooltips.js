import tippy from "tippy.js";
import $ from "jquery";

(function (tippy, $) {
  $("[data-tooltip]").each(function (index, elem) {
    const tooltip = $(elem).data("tooltip");
    let tooltip_theme = $(elem).data("tooltip-theme");
    if (!tooltip_theme) {
      tooltip_theme = "normal";
    }
    const tooltip_opts_serialized = $(elem).data("tooltip-opts") ?? "{}";
    try {
      const tooltip_opts = JSON.parse(tooltip_opts_serialized);
      tippy(elem, {
        content: tooltip,
        theme: tooltip_theme,
        ...tooltip_opts,
      });
    } catch (e) {
      console.error(e);
    }
  });
})(tippy, $);
