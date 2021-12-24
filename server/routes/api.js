const express = require('express')
const router = express.Router()
const { google } = require('googleapis')

// Google spreadsheet id
const  spreadsheetId  = process.env.SPREADSHEET_ID

// Routes 

// /api/getgooglesheets-data

router.get('/getgooglesheets-data', async (req,res) => {
    try {
        
        const auth = new google.auth.GoogleAuth({
            keyFile : "keys.json",
            scopes : "https://www.googleapis.com/auth/spreadsheets"
        });

        const client = await auth.getClient();

        const sheets =  google.sheets({
                version : 'v4',
                auth : client
            });
        
        const metaData = await sheets.spreadsheets.get({
               auth,
               spreadsheetId
        });
        
        // Get data of rows from sheets
        const getRows = await sheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range : 'Sheet1',

        }); 


            res.send(getRows.data)
    } catch (error) {
        console.log(error)
    }
          
});


// /api/create
router.post('/create', async (req,res) => {
    const {AvataarName,ProfileScore} = req.body

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile : "keys.json",
            scopes : "https://www.googleapis.com/auth/spreadsheets"
        });

        const client = await auth.getClient();

        const sheets =  google.sheets({
                version : 'v4',
                auth : client
            });
            const metaData = await sheets.spreadsheets.get({
                auth,
                spreadsheetId
         });
         
         // Get data of rows from sheets
         const getRows = await sheets.spreadsheets.values.get({
             auth,
             spreadsheetId,
             range : 'Sheet1',
 
         });
 
        // Adding data to sheets
         await sheets.spreadsheets.values.append({
             auth,
             spreadsheetId,
             range : 'Sheet1!A:B',
             valueInputOption : "USER_ENTERED",
             resource : {
                 values : [
                     [AvataarName, ProfileScore]
                 ]
             }
         })  
         
         res.send('Sheets Data Created Successfully')
    } catch (error) {
        console.log(error)
    }
          
});



module.exports = router