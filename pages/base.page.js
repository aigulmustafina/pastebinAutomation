class BasePage {
    constructor(url) {
        this.url = url;
    };

    open() {
        browser.url(this.url);
    };

    close() {
        browser.closeWindow();
    };
};
module.exports = BasePage;
