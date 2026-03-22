import {test, expect} from '@playwright/test';
import {LoginPage} from "../../pages/LoginPage";
import {CartPage} from "../../pages/CartPage";
import {InventoryPage} from "../../pages/InventoryPage";
import {products, users} from "../../fixtures/testData";


test.describe('cart',() => {
    test('Should be able to add products to cart', async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);

        await inventoryPage.addProductToCart(products.backpack);
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

        await inventoryPage.goToCart();
        await expect(cartPage.cartItems).toHaveCount(1);
    });

    test('Should be able to remove product from cart', async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);

        await inventoryPage.addProductToCart(products.backpack);
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

        await inventoryPage.removeProductsFromCart(products.backpack);
        await expect(inventoryPage.shoppingCartBadge).toHaveCount(0);
    });

});