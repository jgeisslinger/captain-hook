/*************************************
 *  Basis File for Captain Hook API
 *  Global Javascript Functions
 *  Version: 1
 **************************************/

//MODULES
const wget = require('node-wget');



module.exports = {
    clonerepo

}

//Download the repo into the TEMP folder
function clonerepo(url) {

    wget({
        url: url,
        dest: './tmp/',
        timeout: 2000
    },
    function (error, response, body) {
        if (error) {
            console.log('--- error:');
            console.log(error);            // error encountered
        } else {
            console.log('--- headers:');
            console.log(response.headers); // response headers
        }
    });
}