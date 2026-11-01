import test from "@playwright/test";

test('LoginPage',async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/",{waitUntil:"load"})
await page.locator("[name='username']").fill("Admin")
await page.locator("[name='password']").fill("admin123")
await page.locator("[type='submit']").click()
await page.locator(".oxd-userdropdown-name").click()
await page.locator("//*[text()='Logout']").click()
await page.waitForTimeout(3000)






})