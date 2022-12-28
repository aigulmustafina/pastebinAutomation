const NewCodePage = require('../../pages/newcode.page');
const PasteBinPage = require('../../pages/pastebin.page');
const PasteData = require('../../testdata/pastedata.js');

describe("Bring on it", () => {
    before(async () => {
        await PasteBinPage.open();
        await PasteBinPage.fillPasteFormBringItOn();
    });
    
    it('Should get given title', async () => {
        await NewCodePage.newPasteTitle.waitForDisplayed();
        await expect(NewCodePage.newPasteTitle).toHaveTextContaining(PasteData.pasteTitle2);
        
    });

    it('Should suspend to bush syntax', async () => {
        await expect(NewCodePage.newPasteFormat).toHaveText(PasteData.format);
    });

    it('Should contain given code', async () => {
        await NewCodePage.getRawText();
        await expect(NewCodePage.rawText).toHaveText(PasteData.bashCommand);
    });

});