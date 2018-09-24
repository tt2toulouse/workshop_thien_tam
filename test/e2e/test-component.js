// to run the tests install testcafe globaly : npm install -g testcafe
// to run one test file : testcafe chromium test/e2e/test-component.js --selector-timeout 50000 / testcafe firefox test/e2e/test-component.js --selector-timeout 50000
//			(the browser has to be installed on the machine where you run the test)
import Page from "./test-component-model";

fixture`FirstTest`.page`http://localhost:8080/`;

const page = new Page();

test("First test of component", async t => {
  await t
    .click(page.routerChoice)
    .expect(page.messageDisplayed.exists)
    .ok("display ok");
});
