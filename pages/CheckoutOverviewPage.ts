import {Locator, Page} from '@playwright/test'


export class CheckoutPage{
    readonly page: Page;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;
    readonly completeTitle: Locator;
    readonly completeText: Locator;

    constructor(page:Page){
        this.page = page;
        this.finishButton = page.locator('[data-test=\'finish\']');
        this.cancelButton = page.locator('[data-test=\'cancel\']');
        this.completeTitle = page.locator('[data-test=\'title\']');
        this.completeText = page.locator('[data-test=\'complete-text\']');
    }

    async finish(page:Page){
        await this.finishButton.click();
    }

    async cancel(page:Page){
        await this.cancelButton.click();
    }



}