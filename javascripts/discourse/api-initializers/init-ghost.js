import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
    columns.delete("views");
    columns.delete("likes");
    columns.delete("activity");
    columns.delete("replies");
    return columns;
  });
});
