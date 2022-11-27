const PasteData = require("../../testdata/pastedata")

describe("Test suite", () => {

    it("I can Win: step 1", async () => {
        await browser.url("https://pastebin.com"); 
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
    }); 

    it("I can Win: Step 2", async () => {
        await $("#postform-text").setValue("Hello from WebDriver")
        await $("#select2-postform-expiration-container").click()
        await $("//*[@id=\"select2-postform-expiration-results\"]/li[3]").click()
        await $("#postform-name").setValue("helloweb") 
    });

    it("Bring It On: Step 1", async () => {
        await browser.url("https://pastebin.com"); 
    });

    it("Bring it On: Step 2", async () => {
        await $("#postform-text").setValue(PasteData.bashCommand)
        const selectFormat = await $("#select2-postform-format-container")
        await selectFormat.waitForClickable({ timeout: 3000 });
        await selectFormat.click()
        await $("//*[@id=\"select2-postform-format-results\"]//ul/li[1]").click()
        await $("#select2-postform-expiration-container").click()
        await $("//*[@id=\"select2-postform-expiration-results\"]/li[3]").click()
        await $("#postform-name").setValue(PasteData.pasteTitle)
        await $(".btn.-big").click()  
    });

    it("Bring it on: Step 3", async () => {
        const codeTitle = await $(".info-top h1").getText()
        expect(codeTitle).toEqual(PasteData.pasteTitle);
        const bashFormat =  await $('//a[text()="Bash"]')
        await bashFormat.isDisplayed()
        await $("//a[text()='raw']").click()
        const rawText = await $('//body/pre').getText()
        expect(rawText).toEqual(PasteData.bashCommand)
    });
   
    
})