import $ from "jquery";

const resultsBox = ".result__result";
const trendsBox = ".result__trends";

function changeBoxActionButtonContent(content) {
  $boxActionButtons.each((_, button) => {
    $(button).children("span").text(content);
  });
}

$(".result__toggler button").each((index, button) => {
  $(button).on("click", function () {
    $(button).addClass("active");
    $(button).siblings().removeClass("active");

    if (index === 0) {
      $(resultsBox).show();
      $(trendsBox).hide();
      changeBoxActionButtonContent("View All Results");
    } else {
      $(resultsBox).hide();
      $(trendsBox).show();
      changeBoxActionButtonContent("View All Trends");
    }
  });
});

const $resultContainer = $("#result.box");
const $detailsRows = $("table.table.detailed tr.details");
const $boxActionButtons = $("#result .box-header .box-actions button");

$boxActionButtons.each((_, button) => {
  $(button).on("click", () => {
    $detailsRows.each((_, row) => {
      $(row).attr("hidden", () => {
        return !$resultContainer.hasClass("active");
      });
    });
  });
});
