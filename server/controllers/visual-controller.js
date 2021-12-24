import Visual from '../models/VisualData.js'



class VisualController {


    static createVisualData = async (req,res) =>{
       
         try {


            const data = await new Visual({
                avataarname : req.body.avataarname,
                score : req.body.score,
            })

             await data.save()

             res.status(201).json('Created Successfully')
             
         } catch (error) {
            res.status(400).json('Oops failed to create')
         }

        
        
    }

    static getVisualData = async (req,res) =>{
         
            
         try {

             const data = await Visual.find()

             res.status(201).json({data})
             
         } catch (error) {
            res.status(400).json('Oops failed to found')
         }
    }


     


}

export default VisualController