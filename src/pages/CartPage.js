import * as allure from "allure-js-commons";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    constructor (page) {
        super (page);
        this.productPrice = this.page.getByText('$152.99');
        this.plusQuantityButton = this.page.getByRole('button', { name: '+' });
        this.updateButton = this.page.getByText('UPDATE');
        this.typeBugCheck = this.page.getByLabel('Functional', { exact: true });
        this.correctResultCheck = this.page.getByLabel('The grand total is equal to');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
        this.viewReportButton = this.page.getByRole('button', { name: 'View Issue Report' });
        
    }

    //Просмотреть общую стоимость товара 
    async goToProductPrice () {
        await allure.step ("Просмотреть общую стоимость товара", async () => {
        await this.productPrice.click();
    });
    }

    async chooseCorrectResult () {
        await allure.step ("Выбрать тип и ожидаемый результат на странице корзины", async () => {
        await this.typeBugCheck.check();
        await this.correctResultCheck.check();
        await this.submitButton.click();
    });
    }

    async goToIssueReport () {
        await allure.step ("Перейти к отчету об ошибке", async () => {
        await this.viewReportButton.click();
    });
    }

    //Увеличить и обновить количество товара в корзине
    async goUpdateQuantity () {
        await allure.step ("Увеличить и обновить количество товара в корзине", async () => {
        await this.plusQuantityButton.dblclick();
        await this.updateButton.click();
    });
    }

}