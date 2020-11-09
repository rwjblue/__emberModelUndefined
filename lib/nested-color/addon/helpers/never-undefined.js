import { helper } from "@ember/component/helper";

export default helper(function ([model]) {
  if (model === undefined) {
    throw new Error("model is undefined");
  } else {
    return model;
  }
});
