import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import { App } from '../src/app.page';

const url = 'https://academybugs.com/find-bugs/';
let app;

// 1. Bug with pagination on the main page
test('Bug with pagination on the main page @MainPage', async ({ page }) => {
  await allure.tag("MainPage");
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToPagination();
  await allure.step("Verify crash bug message on the main page pagination", async () => {
    await expect(app.mainPage.overlayMainPage).toContainText('You found a crash bug, examine the page by clicking on any button for 5 seconds.');
  });

  await app.mainPage.chooseCorrectResultPagination();
  await app.cartPage.goToIssueReport();
  await allure.step("Verify issue report for pagination bug on the main page", async () => {
    await expect(app.mainPage.popupPage).toContainText('In this bug, the page becomes unresponsive when clicking on the numbers of results.');
  });
});

// 2. Bug with filter by price on the product page
test('Bug with filter by price on the product page @ProductPage', async ({ page }) => {
  await allure.tag("ProductPage");
  app = new App(page);

  await app.mainPage.open(url);
  await app.productPage.goToProductCard();
  await app.productPage.goToFilterByPrice();
  await app.productPage.chooseCorrectResultFilterByPrice();
  await app.cartPage.goToIssueReport();
  await allure.step("Verify issue report for price filter bug", async () => {
    await expect(app.mainPage.popupPage).toContainText('In this bug, the filter by price doesn\'t work in the product details or product list pages.');
  });
});

// 3. Bug with description on the product page
test('Bug with description on the product page @ProductPage', async ({ page }) => {
  await allure.tag("ProductPage");
  app = new App(page);

  await app.mainPage.open(url);
  await app.productPage.goToProductCard();
  await app.productPage.goToDescriptionBlock();
  await app.productPage.chooseCorrectResultDescription();
  await app.cartPage.goToIssueReport();
  await allure.step("Verify issue report for description bug", async () => {
    await expect(app.mainPage.popupPage).toContainText('In this bug, the short description and description of the product are not in English.');
  });
});

// 4. Bug with Hot Item section keeps loading
test('Bug with Hot Item section keeps loading @ProductPage', async ({ page }) => {
  await allure.tag("ProductPage");
  app = new App(page);

  await app.mainPage.open(url);
  await app.productPage.goToProductCard();
  await app.productPage.goToHotItemProduct();
  await allure.step("Verify loader visibility in Hot Item section", async () => {
    await expect(app.productPage.loader).toBeVisible();
  });
  await app.productPage.goToHotItemLoad();
  await app.productPage.chooseCorrectResultHotItem();
  await app.cartPage.goToIssueReport();
  await allure.step("Verify issue report for Hot Item section bug", async () => {
    await expect(app.mainPage.popupPage).toContainText('In this bug, the product in the Hot Item section keeps loading.');
  });
});

// 5. Bug with the grand total being $100 more
test('Bug with the grand total being $100 more @CartPage', async ({ page }) => {
  await allure.tag("CartPage");
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToAddProductToCart();
  await app.mainPage.goToCheckout();
  await app.cartPage.goToProductPrice();
  await app.cartPage.chooseCorrectResult();
  await app.cartPage.goToIssueReport();
  await allure.step("Verify issue report for grand total bug", async () => {
    await expect(app.mainPage.popupPage).toContainText('In this bug, the grand total is $100 more than the sum of all products in the cart.');
  });
});

// 6. Bug with product quantity cannot be increased past 2
test('Bug with product quantity cannot be increased past 2 @CartPage', async ({ page }) => {
  await allure.tag("CartPage");
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToAddProductToCart();
  await app.mainPage.goToCheckout();
  await app.cartPage.goUpdateQuantity();
  await allure.step("Verify issue report for product quantity bug", async () => {
    await expect(app.mainPage.popupPage).toContainText('In this bug, the product quantity cannot be increased past 2.');
  });
});
