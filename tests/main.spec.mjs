import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Main page", () => {
  test("check title", async ({ page }) => {
    const title = page.locator(".container");

    await expect(title).toContainText("create-react-app github issue list");
  });

  test("check num of issues", async ({ page }) => {
    const issueList = page.locator(".card");

    await expect(issueList).toHaveCount(30);
  });

  test("check link", async ({ page }) => {
    const firstIssueNumber = page.locator(".card >> css=h2")[0];

    await page.click(".card >> css=h2");
    page.url().includes(firstIssueNumber);
  });
});
