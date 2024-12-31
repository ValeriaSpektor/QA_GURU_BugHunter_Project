import * as allure from "allure-js-commons";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
    constructor (page) {
        super (page);
        this.paginationButton = this.page.getByRole('link', { name: '50' });
        this.addToCartButton = this.page.locator('#ec_add_to_cart_5');
        this.checkoutButton = this.page.getByRole('link', { name: 'CHECKOUT NOW' });
        this.overlayMainPage = this.page.locator('body');
        this.popupPage = this.page.locator('#popmake-4406');
        this.typeBugCheckPagination = this.page.getByLabel('Crash');
        this.correctResultCheckPagination = this.page.getByLabel('The selected number of');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
        
    }

    //Переход к пагинации
    async goToPagination () {
        await allure.step ("Переход к кнопке пагинации на главной странице", async () => {
        await this.paginationButton.click();
    });
    }

    async chooseCorrectResultPagination() {
        await allure.step ("Выбрать тип и ожидаемый результат при переходе по пагинации на Главной странице ", async () => {
        await this.typeBugCheckPagination.check();
        await this.correctResultCheckPagination.check();
        await this.submitButton.click();
    });
    }

    //Добавление товара в корзину с главного экрана
    async goToAddProductToCart() {
        await allure.step ("Добавление товара в корзину с главного экрана", async () => {
        await this.addToCartButton.click();
    });
    }

    //Переход в корзину с главного экрана
    async goToCheckout () {
        await allure.step ("Переход в корзину с главного экрана", async () => {
        await this.checkoutButton.click();
        await this.page.waitForLoadState('networkidle');
    });
    }



}
