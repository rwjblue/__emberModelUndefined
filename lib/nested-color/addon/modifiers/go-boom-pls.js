import Modifier from "ember-modifier";

export default class GoBoomPlsModifier extends Modifier {
  willRemove() {
    if (this.args.model === undefined) {
      throw new Error("model is undefined");
    }
  }
}
