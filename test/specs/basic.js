const signUpPage = require('../page/signUp.page.js')
const nameDatePage = require('../page/nameDate.page.js')
const awardsResultsPage = require('../page/awardsResults.page.js')



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

    it('Get username and registration data', async () => {
        await nameDatePage.getName()
        await browser.pause(100)

        await nameDatePage.getDate()
        await browser.pause(100)
        })

    it('Check awards and results in UA localization', async () => {
        await awardsResultsPage.statsBtn()
        await browser.pause(100)
    
        await awardsResultsPage.statsClick()
        await browser.pause(100)

        // await awardsResultsPage.getStats()
        // await browser.pause(100)
        })    
    }
)
