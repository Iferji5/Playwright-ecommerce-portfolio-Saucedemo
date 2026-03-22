import {test, expect} from '@playwright/test';
import {LoginPage} from "../../pages/LoginPage";
import {users} from "../../fixtures/testData";
import {InventoryPage} from "../../pages/InventoryPage";

test.describe('login',() => {
    test('Successfully logged in',async ({page})=>{
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);

        await expect(page).toHaveURL(/inventory/);
        await expect(inventoryPage.inventoryTitle).toContainText("Products")

    });

    test('show error for lockeout user',async ({page})=>{
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(users.lockedOut.username, users.lockedOut.password);

        await expect(loginPage.errorMessage).toBeVisible()
    })


});