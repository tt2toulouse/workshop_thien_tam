// see doc http://devexpress.github.io/testcafe/documentation/test-api/
// css selector for the test component demo

import { Selector } from "testcafe";

export default class Page {
  constructor() {
    // radio button
    this.routerChoice = Selector("a[href='/test-path']");
    // display
    this.messageDisplayed = Selector("div[aeris-ciblage-css]");
  }
}
