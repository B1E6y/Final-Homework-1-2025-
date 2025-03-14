const { faker } = require('@faker-js/faker');


class signUpPage {

        get signUp() {return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}
        get setRandomMail() {return $('#email')}
        get setRandomLogin() {return $('#login')}
        get setRandomPass() {return $('#password')}    
        get continueButton() {return $('/html/body/div[1]/div[4]/div/main/div/div[2]/div[2]/div/div[2]/div/form/div[3]/button/span')}
        get includes() {return $('/html/body/div[1]/div[4]/div/main/div/div[1]/div/details/summary/span')}
        get gitCopilot() {return $("//*[text()='Access to GitHub Copilot']")}
        
        

        async signUpButton () {
             await this.signUp.click()
             }
             async setEmailInput() {
                await this.setRandomMail.setValue(faker.internet.email());
         
             }
             async setPasswordInput() {
                 await this.setRandomPass.setValue(faker.internet.password());   
             }
         
             async setLoginInput() {
                 await this.setRandomLogin.setValue(faker.internet.password({ length: 20, memorable: true }));   
             }     

              async continue() {
             await this.continueButton.click();      
             }

             async include() {
                await this.includes.click();      
                }

        
    }


module.exports = new signUpPage()