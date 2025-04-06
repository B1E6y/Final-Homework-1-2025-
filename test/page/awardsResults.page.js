class awardsResultsPage {

    get stats() {return $('.flex.gap-x-2 .w-full .hidden.dropdown-toggle') }
    get statsMenu() {return $('#navbarMenu > div > div > div.w-full > ul') }
   
        async statsBtn () {
        console.log("Does Stats button clickable? : " + await this.stats.isClickable());  
        }

        async statsClick () {
        await this.stats.click();  
        }

        async getStats () {
            console.log(await this.statsMenu.getText());  
           }
      
    }

module.exports = new awardsResultsPage()
