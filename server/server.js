require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const visualRoute = require('./routes/api')
const cors = require('cors')


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:  true}))



// Routes here(endpoint)
app.use('/api',visualRoute)



app.listen(PORT, (req,res)=>{
    console.log(`Server started at http://localhost:${PORT}`)
})