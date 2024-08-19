class PastePage {
    get codeTextArea() { return $('#postform-text'); }
    get expirationSelect() { return $('#postform-expiration'); }
    get titleInput() { return $('#postform-name'); }
    get submitButton() { return $('//button[@type="submit"]'); }

    open() {
        browser.url('https://pastebin.com');
    }

    createPaste(code, expiration, title) {
        this.codeTextArea.setValue(code);
        this.expirationSelect.selectByAttribute('value', expiration);
        this.titleInput.setValue(title);
        this.submitButton.click();
    }
}

export default new PastePage();
