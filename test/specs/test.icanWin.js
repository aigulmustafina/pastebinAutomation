const PasteBinPage = require('../../pages/pastebin.page');
const PasteData = require('../../testdata/pastedata.js');


describe("I can Win", () => {
    before(async () => {
        await PasteBinPage.open();
        await PasteBinPage.fillPasteFormIcanWin();
    });

    it('Should be valid value for text', async () => {
        await expect(PasteBinPage.textInput).toHaveValueContaining(PasteData.code);
    });

    it('Should be valid value for expiration time', async () => {
        await expect(PasteBinPage.expirationInput).toHaveValueContaining(PasteData.expirationTime);
    });

    it('Should be valid value for pasteTitle', async () => {
        await expect(PasteBinPage.pasteName).toHaveValueContaining(PasteData.pasteTitle1);
    });

});
    