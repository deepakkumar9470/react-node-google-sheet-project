// import googleapis from "googleapis";

const { google } = require('googleapis')

const keys = require('../keys.json')
const  spreadsheetId  = '1YKT82Ns6kV3iwE7kcPpjc03VES8GbWL1fQi9UEGhei0'

const authentication =async  () =>{
        try {
    
            const auth = new google.auth.GoogleAuth({
                keyFile :keys,
                scopes : "https://www.googleapis.com/auth/spreadsheets"
            });

            const client = await auth.getClient();
            const sheets =  google.sheets({
                version : 'v4',
                auth : client
            });
            return {sheets}
            
            
            
        } catch (error) {
            console.log(error)
        }

}

module.exports = authentication