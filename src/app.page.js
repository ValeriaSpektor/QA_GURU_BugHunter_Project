import { MainPage,ExpectedPage,ProductPage,CartPage } from "./pages/index";

export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage (page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
}
};