export abstract class AbstractFunctions {

    abstract navigateToUrl(url: string, info: string):void;

    /** Click Operations */
    abstract clickOnElement(locator: string, info: string): void;

    /** Entering Data Operations */
    abstract enterText(locator: string, text: string, info: string): void;
}