
import { useEffect } from "react"
import { useState } from "react"
import { Data } from "../comonents/Data"
import { motion } from "motion/react"









export const Shop = () => {
  
  
const [fakdata,setFakdata] = useState([])
useEffect(()=>{
  fetch('fakeData.json')
  .then(res=>res.json())
  .then(data=>setFakdata(data))  
},[])


//==== shopingcomponent=====//

  return (
    <motion.div

    
  initial={{ opacity: 0, y: -100, visibility: "hidden"}}  
  whileInView={{ opacity: 1, y: 0, visibility: "visible"}}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
    
     className= 'bg-[#6D214F]  animet gap-2 md:gap-4 overflow-hidden mt-[61px] md:mt-[81px]  text-black grid md:grid-cols-4 sm:grid-cols-2'>

    

        {
            fakdata.map(singeldata=><Data
            key={singeldata.id}
            singeldata={singeldata}
         
            ></Data>)
            
        }



        </motion.div>
  )
}

