import {test, expect} from '@playwright/test';
import {LoginPage} from "../../pages/LoginPage";
import {users} from "../../fixtures/testData";
import {InventoryPage} from "../../pages/InventoryPage";

test.describe('Inventory', () => {
    test.beforeEach(async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto()
        await loginPage.login(users.standard.username, users.standard.password);
    });

    test('should display inventory page and product list ', async ({page}) => {
        const inventoryPage = new InventoryPage(page);

        await expect(inventoryPage.inventoryTitle).toHaveText('Products');
        await expect(inventoryPage.inventoryItems).toHaveCount(6);
    });

    test('should sort products from low to high', async ({page}) => {
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.sortBy('lohi');
    });



});