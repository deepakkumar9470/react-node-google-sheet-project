import React,{useState,useEffect} from 'react'

import { Button, Form, Header } from 'semantic-ui-react'
import './Visualisation.css'
import {useNavigate} from 'react-router-dom'

import axios from 'axios'

const url = 'https://sheet.best/api/sheets/5b4cff12-3b45-4410-8c5e-663dd329727e'

const Visualisation = () => {
    
    const navigate = useNavigate()

    const [AvataarName,setAvataarName] = useState('')
    const [ProfileScore,setProfileScore] = useState('')
 

    const formSubmit =  async (e) => {
        e.preventDefault()
        try {
            
            const res = await axios.post('https://react-node-google-sheet-app.herokuapp.com/api/create', {
                AvataarName,ProfileScore
            })
            console.log(res)
            window.alert('Created Successfully')
            navigate('/')
            setAvataarName('')
            setProfileScore('')
        } catch (error) {
             console.log(error)
        }  

    }

    return (
        <div  className="form_container">

         <Header as='h2' className="header">React & Node Google Sheets</Header>

            <Form className="form" onSubmit={formSubmit}>
            <Form.Field>
                <label>Avataar Name</label>
                <input 
                  type="text"
                   value={AvataarName}
                   onChange={(e)=>setAvataarName(e.target.value)} 
                  placeholder='Enter your avataar name' />
            </Form.Field>
            <Form.Field>
                <label>Performance Score</label>
                <input 
                  type="number" 
                   value={ProfileScore}
                   onChange={(e)=>setProfileScore(e.target.value)}
                  placeholder='Enter your performance score' />
            </Form.Field>

            
            <Button color="green" type='submit'>Submit</Button>
            </Form>

      </div>
    )
}

export default Visualisation
