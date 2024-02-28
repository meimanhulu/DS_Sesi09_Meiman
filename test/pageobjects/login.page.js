const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {return $('#user-name');}
    get inputPassword () {return $('#password');}
    get btnLogin () {return $('#login-button');}
    get errorLockedOutUser () {return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.inputUsername.setValue(process.env.USERNAME_STANDARD_USER);
        await this.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }
    async login () {
        await this.inputUsername.setValue(process.env.USERNAME_LOCKED_OUT_USER);
        await this.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
        console.log('USERNAME = ${process.env.USERNAME_LOCKED_OUT_USER}')
    }

    async validateLockedOutUserError () {
        expect(this.errorLockedOutUser).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();