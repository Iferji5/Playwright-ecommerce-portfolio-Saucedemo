import {Locator, Page} from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly inventoryTitle: Locator;
    readonly inventoryItems: Locator;
    readonly productSortSelect: Locator;
    readonly shoppingCartLink: Locator;
    readonly shoppingCartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryTitle = page.locator('[data-test="title"]')
        this.inventoryItems = page.locator('[data-test="inventory-item"]');
        this.productSortSelect = page.locator('[data-test="product-sort-container"]')
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');

    }

    async sortBy(optionValue : string ): Promise<void> {
        await this.productSortSelect.selectOption(optionValue);
    }

    getAddToCartButton(productName: string): Locator {
        const productId = productName.toLowerCase().replaceAll(' ', '-');
        return this.page.locator(`[data-test="add-to-cart-${productId}"]`);
    }

    getRemoveButton(productName: string): Locator {
        const productId = productName.toLowerCase().replaceAll(' ', '-');
        return this.page.locator(`[data-test="remove-${productId}"]`);
    }

    async addProductToCart(productName: string): Promise<void> {
        await this.getAddToCartButton(productName).click();
    }

    async removeProductsFromCart(productName: string): Promise<void> {
        await this.getRemoveButton(productName).click();
    }

    async goToCart():Promise<void> {
       await this.shoppingCartLink.click();
    }











}