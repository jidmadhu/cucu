import {Page} from '@playwright/test'
import { Given, Then, When } from '@cucumber/cucumber'
import {BasePage} from '../pages/BasePage'
import { ICustomWorld } from "../support/ICustomWorld";


Given("The User navigate to {string}", async function (this: ICustomWorld, url: string){
    
     let page = new BasePage(Page);

     page?.navigateToUrl("https://www.google.com/")
});