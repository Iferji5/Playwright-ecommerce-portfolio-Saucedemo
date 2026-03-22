import {Locator, Page} from '@playwright/test'

export class CheckoutOverviewPage{
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
        this.completeText = page.locator('[data-test=\'complete-header\']');
    }

    async finish():Promise<void> {
        await this.finishButton.click();
    }

    async cancel():Promise<void> {
        await this.cancelButton.click();
    }
}
