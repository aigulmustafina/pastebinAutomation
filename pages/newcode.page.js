const BasePage = require('./base.page');

class NewCodePage extends BasePage {
    constructor() {
         super('https://pastebin.com');
    };

    get newPasteTitle() {return $('.info-top h1')};
    get newPasteFormat() {return $('//a[@href="/archive/bash"]')}
    get rawTextButton() {return $('//a[text()="raw"]')};
    get rawText() {return $('//body/pre')};

    async getRawText() {
        await this.rawTextButton.click();
    };
};
module.exports = new NewCodePage();

