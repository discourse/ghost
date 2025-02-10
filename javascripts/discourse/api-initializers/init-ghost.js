import $ from "jquery";
import { apiInitializer } from "discourse/lib/api";
import { withSilencedDeprecations } from "discourse/lib/deprecated";

export default apiInitializer("0.8.0", (api) => {
  withSilencedDeprecations("discourse.hbr-topic-list-overrides", () => {
    api.modifyClass("component:topic-list", {
      pluginId: "ghost",
      tagName: "ul",
      classNames: ["ghost-legacy-topic-list"],
    });

    api.modifyClass("component:topic-list-item", {
      pluginId: "ghost",
      tagName: "li",
    });
  });

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
