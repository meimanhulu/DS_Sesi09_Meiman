const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

describe('SWAG LABS', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()
    })
    it('should login with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await LoginPage.validateLockedOutUserError()
    })
})