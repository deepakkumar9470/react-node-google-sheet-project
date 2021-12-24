
const fetchAPI = require('node-fetch')

module.exports.getFetchData = async (req, res) => {
   
      try {
            const response = await fetchAPI('https://docs.google.com/spreadsheets/d/134ZIhplKHX5TV1kPLXft9QsKDD1y5Epmm-aQ5fBqIzs/edit#gid=0')
            const data = await response.json()
            res.status(200).json(data)
      } catch (error) {
           return res.status(400).json("Invalid credentials!");   
        }

}
