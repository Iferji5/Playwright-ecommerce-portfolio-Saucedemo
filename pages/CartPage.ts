import {Locator, Page} from '@playwright/test'

export class CartPage{
    readonly page: Page;
    readonly cartItems :Locator;
    readonly checkoutButton :Locator;
    readonly continueShoppingButton :Locator;
    readonly removeButton :Locator;

    constructor(page: Page){
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('button[data-test=\'checkout\']');
        this.continueShoppingButton = page.locator('button[data-test=\'continue-shopping\']');
        this.removeButton = page.locator('button[data-test^=\'remove-\']');
    }

    async goToCheckoutPage():Promise<void> {
        await this.checkoutButton.click();
    }

    async continueShopping():Promise<void> {
        await this.continueShoppingButton.click();
    }


}