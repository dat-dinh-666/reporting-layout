import tippy from "tippy.js";

const processingContent = "Your visit report is currently being processed";
const unreadContent = "Unread Content";

tippy("[data-processing]", {
  content: processingContent,
  theme: "checks",
  maxWidth: 200,
});

tippy("[data-unread]", {
  content: unreadContent,
  theme: "unread",
});
