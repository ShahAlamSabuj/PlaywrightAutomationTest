//This is a TypeScript class file where all the repetative methods are written
import {Page, expect} from '@playwright/test';
export default class homePage{
    readonly page:Page;

    constructor (page: Page){
        this.page=page;
    }
    async goToHomePage(){
        await this.page.goto('https://automationexercise.com');
    }
    async signUpPage(){
        /*
        -- This name will be visible in the login Page, need to 
        -- change this user name and email and password before every complete run!!
        -- Intentionally, kept e-mail and password same!!
        */
        const textBoxLocatorName = this.page.getByPlaceholder("Name");
        await textBoxLocatorName.fill("AaaLLMS");
        const textBoxLocatorEmail = this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        await textBoxLocatorEmail.fill("aaallms@gmail.com");

        await this.page.getByRole('button',{name:"Signup"}).click();
    }
    async finalRegistration(){
        const radioButtonLocatorMr = this.page.getByLabel("Mr.");
        await radioButtonLocatorMr.click();

        /*
        Password need to change everytime with e-mail address
        */
        const textBoxLocatorPass = this.page.getByLabel('Password *');
        await textBoxLocatorPass.fill("aaallms@gmail.com");
        
        const dropdownLocatorForDays = this.page.locator('#days');
        await dropdownLocatorForDays.selectOption('23');
        
        const dropdownLocatorForMonths = this.page.locator('#months');
        await dropdownLocatorForMonths.selectOption("January");

        const dropdownLocatorForYears = this.page.locator('#years');
        await dropdownLocatorForYears.selectOption("1985");

        const textBoxLocatorFirstName = this.page.getByLabel('First name *');
        await textBoxLocatorFirstName.fill("Shah");
        
        const textBoxLocatorLastName = this.page.getByLabel('Last name *');
        await textBoxLocatorLastName.fill("Alam");
        
        const textBoxLocatorStateAddress = this.page.getByLabel('Address * (Street address, P.');
        await textBoxLocatorStateAddress.fill("Dhaka Bangladesh, 1211");
  
        const textBoxLocatorState = this.page.getByLabel('State *');
        await textBoxLocatorState.fill("Dhaka Bangladesh");
  
        const textBoxLocatorCity = this.page.getByLabel('City *');
        await textBoxLocatorCity.fill("Narayanganj");

        const textBoxLocatorZipCode = this.page.locator('#zipcode');
        await textBoxLocatorZipCode.fill("1421");

        const textBoxLocatorMobileNumber = this.page.getByLabel('Mobile Number *');
        await textBoxLocatorMobileNumber.fill("+8800731652007");

        await this.page.getByRole('button', { name: 'Create Account' }).click();
    }
    async clickOnLogin(){
        //Go to home page
        await this.page.goto('https://automationexercise.com');

        //Click on Signup/Login button
        const elementClickOnLogin = await this.page.locator('xpath=//html/body/header/div/div/div/div[2]/div/ul/li[4]/a');
        await elementClickOnLogin.click();

        /*
        Need to change email address with user name for every complete run 
        E-mail address and user name has link in the login page!!
        */
        const textBoxLocatorLoginWithEmail = this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        await textBoxLocatorLoginWithEmail.fill("aaallms@gmail.com");
      
        const textBoxLocatorPasswordLogin = this.page.getByPlaceholder('Password');
        await textBoxLocatorPasswordLogin.fill("aaallms@gmail.com");
      
        await this.page.getByRole('button',{name:"Login"}).click();
    }
    async addressDetailsVerification(){
        await expect(this.page.getByRole('heading', { name: 'Address Details'})).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Your delivery address' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Your billing address' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Review Your Order' })).toBeVisible();
    }
    async paymentWithCardDetails(){
        const textBoxLocatorNameOnCard = this.page.locator('input[name="name_on_card"]');
        await textBoxLocatorNameOnCard.fill("Mr.Walt");
      
        const textBoxLocatorCardNumber = this.page.locator('input[name="card_number"]');
        await textBoxLocatorCardNumber.fill("4103254785474587");
      
        const textBoxLocatorCVC = this.page.getByPlaceholder('ex.');
        await textBoxLocatorCVC.fill("007");
      
        const textBoxLocatorExpirationMM = this.page.getByPlaceholder('MM');
        await textBoxLocatorExpirationMM.fill("12");
      
        const textBoxLocatorExpirationYYYY = this.page.getByPlaceholder('YYYY');
        await textBoxLocatorExpirationYYYY.fill("2027");
    }

    async orderVerification(){
        await expect(this.page.getByText('Congratulations! Your order')).toBeVisible();
        await expect(this.page.getByText('Order Placed!')).toBeVisible();
    }

    async addProductToCart(){
        //Click on View Products
        const firstProductDetails = await this.page.locator('xpath=//html/body/section[2]/div[1]/div/div[2]/div[1]/div[2]/div/div[2]/ul/li/a');
        await firstProductDetails.click();
        
        // Click on Add to Cart 
        await this.page.getByRole('button',{name:"Add to cart"}).click();

        // Click On View Cart 
        await this.page.getByRole('link',{name:"View Cart"}).click();
    }
}



