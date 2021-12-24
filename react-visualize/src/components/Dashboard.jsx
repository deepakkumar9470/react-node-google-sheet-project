import React,{useState} from 'react'

import axios from 'axios'

const Dashboard = () => {

     const [sheetData, setSheetData] = useState([])


  // fetching data here..
  const fetchdata = async () =>{
      try {
          
           const res = await axios.get("https://react-node-google-sheet-app.herokuapp.com/api/getgooglesheets-data")
           console.log(res)
           setSheetData(res.data.values)
           
      } catch (error) {
          console.log(error)
      }
  }


    return (
        
        <div className="container p-5">

               <button 
                 className="retrieve"
                 onClick={fetchdata}
                 >Retrieve</button>
              
              <table className="table table-responsive  p-4">
                    <thead>
                        <tr>
                        
                        <th className="table-light p-3 text-center fw-bold" scope="col">Avataar Name</th>
                        <th className="table-light p-3 text-center fw-bold" scope="col">Profile Score</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                     {sheetData?.map((s)=>{
                        return (
                            <tr key={s.id}>
                               
                                <td className="table-light p-3 text-center fw-bold">{s.AvataarName} </td>
                                <td className="table-light p-3 text-center fw-bold">{s.ProfileScore}</td>
                               
                            </tr>
                        )
                        })}
                       
                        
                    </tbody>
                    </table>
            
            
        </div>
    )
}

export default Dashboard
