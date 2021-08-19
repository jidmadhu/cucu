import { Page } from "@playwright/test";
import { AbstractFunctions } from '../core/AbstractFunctions'

export class BasePage extends AbstractFunctions {

    page: Page

    constructor(page: Page) {
        super();
        this.page = page;
    }

    navigateToUrl(url: string, info: string = "Navigate to URL"): void {
        console.log(info + ": "+ url)
        this.page.goto(url);
    }

    clickOnElement(locator: string, info: string = "Click on the Element"): void {
        console.log(info + ": "+ locator)
        this.page.click(locator);
    }

    enterText(locator: string, text: string, info: string = "Entering the Text"): void {
        console.log(info + ": "+ text)
        this.page.fill(locator, text)
    }
}