import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import homePage from '../pages/homepage';
dotenv.config();

//const homePage = new homepage(page);

// const homePageURL: string =process.env.URL as string;
// console.log(homePageURL);

test('Case 1: Home page visibility', async ({ page }) => {
   const homePageInastance = new homePage(page);
   await homePageInastance.goToHomePage();

  await expect(page).toHaveTitle("Automation Exercise");
});

test('Case 2: Cart page display verification', async ({ page }) => {
  const homePageInastance = new homePage(page);
  await homePageInastance.goToHomePage();

  //Click on View Products
  const firstProductDetails = await page.locator('xpath=//html/body/section[2]/div[1]/div/div[2]/div[1]/div[2]/div/div[2]/ul/li/a');
  await firstProductDetails.click();

  // Click on Add to Cart 
  await page.getByRole('button',{name:"Add to cart"}).click();

  // Click On View Cart 
  await page.getByRole('link',{name:"View Cart"}).click();

  // Cart's visibility 
    await expect(page.getByText('Proceed To Checkout')).toBeVisible();
});

test('Case 3: Account Creation', async ({ page }) => {
  const homePageInastance = new homePage(page);
  await homePageInastance.goToHomePage();

  // Add to cart and View method
  const addToCartAndView = new homePage(page);
  await addToCartAndView.addProductToCart();

  /*
  //Click on View Products
  const firstProductDetails = await page.locator('xpath=//html/body/section[2]/div[1]/div/div[2]/div[1]/div[2]/div/div[2]/ul/li/a');
  await firstProductDetails.click();

  // Click on Add to Cart 
  await page.getByRole('button',{name:"Add to cart"}).click();

  // Click On View Cart 
  await page.getByRole('link',{name:"View Cart"}).click();
  */
  
  // Click On Proceed To Checkout
  const element2 = await page.locator('xpath=//html/body/section/div/section/div[1]/div/div/a');
  await element2.click();

  // Click on Register
  await page.getByRole('link',{name:"Register / Login"}).click();
 
  //Signing Up the user using custom method
  const signUpInstance = new homePage(page);
  await signUpInstance.signUpPage();

  //User Registration using custom method
  const finalRegisInstance = new homePage(page);
  await finalRegisInstance.finalRegistration();
  
  // Verify 'ACCOUNT CREATED!'
  await expect(page.getByText('Account Created!')).toBeVisible();

  //click on continue button
  const elementContinueButton = await page.locator('xpath=//html/body/section/div/div/div/div/a');
  await elementContinueButton.click();
});

test('Case 4: Verify login with correct user', async ({ page }) => {
  //Login with custom method
  const clickOnLoginButton = new homePage(page);
  await clickOnLoginButton.clickOnLogin();

  /*
  This name(XABC) will be visible in the login Page 
  Need to change this user name according to SignUpPage before every complete run!!
  */
  const elementLocatorForLogIn = page.getByText("Logged in as AaaLLMS");
  await expect(elementLocatorForLogIn).toHaveText("Logged in as AaaLLMS");
});

test('Case 5: Verify Address details', async ({ page }) => {
  //Login with custom method
  const pageLogin = new homePage(page);
  await pageLogin.clickOnLogin();

  // Add to cart and View method
  const addToCartAndView = new homePage(page);
  await addToCartAndView.addProductToCart();

  //Go to Home page
  const homePageInastance = new homePage(page);
  await homePageInastance.goToHomePage();

  //Click on Cart
  const elementContinueCartButton = await page.locator('xpath=//html/body/header/div/div/div/div[2]/div/ul/li[3]/a');
  await elementContinueCartButton.click();

  //Click on Checkout
  const elementProceedToCheckout = await page.locator('xpath=//html/body/section/div/section/div[1]/div/div/a');
  await elementProceedToCheckout.click();

  //Verifying Address details with custom method
  const verifyAddressDetails = new homePage(page);
  await verifyAddressDetails.addressDetailsVerification();
});

test('Case 6: Pay and Confirm Order', async ({ page }) => {
  //Login with custom method
  const pageLogin = new homePage(page);
  await pageLogin.clickOnLogin();

  //Click on Cart
  const elementContinueCartButton = await page.locator('xpath=//html/body/header/div/div/div/div[2]/div/ul/li[3]/a');
  await elementContinueCartButton.click();

  //Click on Checkout
  const elementProceedToCheckout = await page.locator('xpath=//html/body/section/div/section/div[1]/div/div/a');
  await elementProceedToCheckout.click();

  //Adding Description Comments
  const descriptionComment = page.locator('textarea[name="message"]');
  await descriptionComment.fill("Please deliver the product to the 2nd Floor room number 02 before 10AM.");

  //Place the order
  await page.getByRole('link',{name:"Place Order"}).click();

  //Adding Card payment details
  const cardPayment = new homePage(page);
  await cardPayment.paymentWithCardDetails();
 
  //Click to Pay
  await page.getByRole('button',{name:"Pay and Confirm Order"}).click();

  //Verify the success message
  const verifyingTheOrder = new homePage(page);
  await verifyingTheOrder.orderVerification();
});

