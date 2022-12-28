const BasePage = require('./base.page');
const PasteData = require('../testdata/pastedata.js');

class PasteBinPage extends BasePage {
    constructor() {
         super('https://pastebin.com');
    };

    get textInput() {return $('#postform-text')};
    get expirationDropdown() {return $('(//span[@class="select2-selection__arrow"])[3]/b')};
    get expirationInput() {return $('#postform-expiration')};
    get expirationOption() {return $('//li[contains(text(), "10 Min")]')};
    get pasteName() {return $('#postform-name')};
    get pasteFormatDropdown() {return $('#select2-postform-format-container')};
    get pasteFormatOption() {return $('(//li[contains(text(), "Bash")])[1]')};
    get createNewPasteButton() {return $('.btn.-big')};

    async fillPasteFormIcanWin() {
        await this.textInput.setValue(PasteData.code);
        await this.expirationDropdown.click();
        await this.expirationOption.click();
        await this.pasteName.setValue(PasteData.pasteTitle1);
    }

    async fillPasteFormBringItOn() {
        await this.textInput.setValue(PasteData.bashCommand);
        await this.pasteFormatDropdown.click();
        await this.pasteFormatOption.click();
        await this.expirationDropdown.click();
        await this.expirationOption.click();
        await this.pasteName.setValue(PasteData.pasteTitle2);
        await this.createNewPasteButton.click();
    };
};
module.exports = new PasteBinPage();
