import $ from "jquery";
import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8.0", (api) => {
  api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
    columns.delete("views");
    columns.delete("likes");
    columns.delete("activity");
    columns.delete("replies");
    return columns;
  });

  if (api.container.lookup("service:site").mobileView) {
    api.modifyClass("controller:admin-site-settings", {
      pluginId: "ghost",
      actions: {
        toggleMenu() {
          $(".admin-nav").toggleClass("mobile-open");
          $(".admin-detail").toggleClass("mobile-closed mobile-open");
        },
      },
    });
    api.modifyClass("controller:admin-plugins", {
      pluginId: "ghost",
      actions: {
        toggleMenu() {
          $(".admin-nav").toggleClass("mobile-open");
          $(".admin-detail").toggleClass("mobile-closed mobile-open");
        },
      },
    });
    api.modifyClass("controller:admin-watched-words", {
      pluginId: "ghost",
      actions: {
        toggleMenu() {
          $(".admin-nav").toggleClass("mobile-open");
          $(".admin-detail").toggleClass("mobile-closed mobile-open");
        },
      },
    });
  }
});
