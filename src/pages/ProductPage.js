import * as allure from "allure-js-commons";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
    constructor (page) {
        super (page);
        this.productCard = this.page.locator('#ec_product_image_effect_4381370').getByRole('link');
        this.filterByPrice = this.page.getByRole('link', { name: '$50.00 - $99.99 (3)' });
        this.descriptionBlock = this.page.locator(':nth-match(:text("Nam nec tellus a odio"), 2)');
        this.currencyBlock = this.page.locator('#ec_currency_conversion');
        this.hotItemBlock = this.page.locator('#ec_image_product_widget_anchor-bracelet_1_0');
        this.loader = this.page.locator('#post-1820 div').nth(2);
        this.overlayCardPage = this.page.locator('#sq-page');
        this.typeBugCheckDescription = this.page.getByLabel('Content');
        this.correctResultCheckDescription = this.page.getByLabel('The text should be in English');
        this.typeBugCheckFilterByPrice = this.page.getByLabel('Functional', { exact: true });
        this.correctResultCheckFilterByPrice = this.page.getByLabel('A list of products in the');
        this.typeBugCheckHotItem = this.page.getByLabel('Performance');
        this.correctResultCheckHotItem = this.page.getByText('The product in the Hot Item');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });

        
    }

    //Переход в карточку товара
    async goToProductCard () {
        await allure.step ("Переход в карточку товара", async () => {
        await this.productCard.click();
        await this.page.waitForLoadState('networkidle');
    });
    }

    //Переход к фильтру по цене
    async goToFilterByPrice () {
        await allure.step ("Переход к фильтру по цене", async () => {
        await this.filterByPrice.click();
    });
    }

    async chooseCorrectResultFilterByPrice () {
        await allure.step ("Выбрать тип и ожидаемый результат для фильтра по цене на странице продукта", async () => {
        await this.typeBugCheckFilterByPrice.check();
        await this.correctResultCheckFilterByPrice.check();
        await this.submitButton.click();
    });
    }

    async chooseCorrectResultHotItem () {
        await allure.step ("Выбрать тип и ожидаемый результат для горящего предложения на странице продукта", async () => {
        await this.typeBugCheckHotItem.check();
        await this.correctResultCheckHotItem.check();
        await this.submitButton.click();
    });
    }

    async chooseCorrectResultDescription () {
        await allure.step ("Выбрать тип и ожидаемый результат для описания на странице продукта", async () => {
        await this.typeBugCheckDescription.check();
        await this.correctResultCheckDescription.check();
        await this.submitButton.click();
    });
    }

    //Переход к блоку описания
    async goToDescriptionBlock () {
        await allure.step ("Переход к блоку описания", async () => {
        await this.descriptionBlock.click();
    });
    }

    //Выбор валюты
    async goToChangeCurrency () {
        await allure.step ("Выбор валюты", async () => {
        await this.currencyBlock.selectOption('EUR');
    });
    }

    //Переход в карточку товара из блока горячее предложение
    async goToHotItemProduct () {
        await allure.step ("Переход в карточку товара из блока горячее предложение", async () => {
        await this.hotItemBlock.click();
    });
    }

    //Клик по лоадеру в карточке горячего товара
    async goToHotItemLoad () {
        await allure.step ("Клик по лоадеру в карточке горячего товара", async () => {
        await this.loader.click();
    });
    }


}
