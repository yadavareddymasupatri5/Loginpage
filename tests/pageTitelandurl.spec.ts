import test from "@playwright/test";

test('page title',async({page})=>{
await page.goto('http://orangehrm.qedgetech.com/',{waitUntil:'load'})
//print title and lenght of title
const pagetitele:string=await page.title()
console.log(pagetitele)
console.log(pagetitele.length)
//print url
const url:string= await page.url()
console.log(url)
console.log(url.length)
const username=page.locator('input#txtUsername')
await username.fill('Admin')

const password=page.locator('input#txtPassword')
await password.fill('Qedge123!@#')

const button=page.locator('input#btnLogin')
await button.click()

const welcome=page.getByRole('link',{name:/Welcome/i})
await welcome.click()

const logout=page.getByRole('link',{name:'Logout'})
await logout.click()

const fp=await page.getByRole('link',{name:'Forgot your password?'}).innerText()
console.log(fp)
const link=await page.getByRole('link',{name:'Forgot your password?'}).getAttribute('href')
console.log(link)







})