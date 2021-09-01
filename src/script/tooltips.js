import tippy from "tippy.js";

const processingContent = "Your visit report is currently being processed";
const unreadContent = "Unread Content";
const deviationContent = "Deviation to the selected organisation";
const accordionContent = "Open Accordion";
const downloadDocument = "Download Document";

tippy("[data-processing]", {
  content: processingContent,
  theme: "checks",
  maxWidth: 200,
});

tippy("[data-unread]", {
  content: unreadContent,
  theme: "unread",
});

tippy("[data-deviation]", {
  content: deviationContent,
  theme: "deviation",
  maxWidth: 160,
});

tippy("[data-accordion]", {
  content: accordionContent,
  theme: "unread",
});

tippy("[data-download-document]", {
  content: downloadDocument,
  theme: "unread",
});
