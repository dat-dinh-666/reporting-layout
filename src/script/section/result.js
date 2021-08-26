import $ from "jquery";

$(".result__toggler button").each((_, button) => {
  $(button).on("click", function () {
    $(button).addClass("active");
    $(button).siblings().removeClass("active");
  });
});
