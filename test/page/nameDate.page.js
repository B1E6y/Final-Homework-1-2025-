class nameDatePage {

        get name() {return $('.mb-6 .text-center .mb-1') }
        get date() {return $('.mb-6 .text-center .text-txt-secondary') }
       
            async getName () {
            console.log("Name is: " + await this.name.getText());  
            }

            async getDate () {
            console.log("Registration date is: " + await this.date.getText());  
            }

          
        }

module.exports = new nameDatePage()
