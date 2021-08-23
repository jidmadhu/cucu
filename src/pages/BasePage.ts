import { Page } from "@playwright/test";
import { ICustomWorld } from "../support/ICustomWorld";
import { AbstractFunctions } from '../core/AbstractFunctions'

export class BasePage extends AbstractFunctions {

    page: Page | undefined

    constructor(page: ICustomWorld) {
        super();
        this.page = page.page
    }

    navigateToUrl(url: string, info: string = "Navigate to URL"): void {
        this.page!.goto(url);
    }

    clickOnElement(locator: string, info: string = "Click on the Element"): void {
        console.log(info + ": "+ locator)
        this.page!.click(locator);
    }

    enterText(locator: string, text: string, info: string = "Entering the Text"): void {
        this.page.fill(locator, text)
    }
}