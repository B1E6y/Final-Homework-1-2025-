const assert = require('assert')

const signUpPage = require('../page/signUp.page.js')


describe('Should check inputs for credentials (Final homework1)', async () => {
    
    it('Go to website github.com', async () => {
        await browser.url('https://github.com/');
        await browser.maximizeWindow();
        await browser.pause(100)
        })

    it('Should click on SignUp, and set fake credentials, and check to exist expected text', async () => {
        await signUpPage.signUpButton();
        await browser.pause(100)

        await signUpPage.setEmailInput();
        await browser.pause(100)

        await signUpPage.setPasswordInput()
        await browser.pause(100)

        await signUpPage.setLoginInput()
        await browser.pause(100)

        await signUpPage.continue();
        await browser.pause(100)
        await signUpPage.continue();

        await signUpPage.include()
        await browser.pause(100)

        await expect(signUpPage.gitCopilot).toHaveText("Access to GitHub Copilot")     
        await browser.pause(100)

        })
    }
)