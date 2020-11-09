import Route from "@ember/routing/route";

export default class extends Route {
  model(params) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(params.color.toUpperCase()), 10);
    });
  }
}
