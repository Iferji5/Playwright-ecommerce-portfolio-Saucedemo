import {test, expect} from '@playwright/test';
import {LoginPage} from "../../pages/LoginPage";
import {InventoryPage} from "../../pages/InventoryPage";
import {CartPage} from "../../pages/CartPage";
import {CheckoutPage} from "../../pages/CheckouPage";
import {CheckoutOverviewPage} from "../../pages/CheckoutOverviewPage";
import {checkOutData, products, users} from "../../fixtures/testData";

test.describe('Checkout',  () => {
    test('Should complete checkout successfully',async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);

        await inventoryPage.addProductToCart(products.bikeLight);
        await inventoryPage.goToCart();

        await cartPage.goToCheckoutPage();

        await checkoutPage.fillCheckoutPage(checkOutData.firstName, checkOutData.lastName, checkOutData.postalCode);
        await checkoutPage.continue()

        await checkoutOverviewPage.finish();

        await expect(checkoutOverviewPage.completeText).toHaveText('Thank you for your order!')
    });

    test('Should show validation error when checkout fields are empty', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);

        await inventoryPage.addProductToCart(products.backpack);
        await inventoryPage.goToCart();

        await cartPage.goToCheckoutPage();

        await checkoutPage.continue();

        await expect(checkoutPage.errorMessage).toBeVisible();
    });

});