import PastePage from "../pageobjects/paste.page";

describe('Pastebin paste creation', () => {
    it('should create a new paste successfully', () => {
        PastePage.open();
        PastePage.createPaste('Hello from WebDriver', '10M', 'helloweb');
        browser.pause(5000); // Wait to view the result
    });
});
