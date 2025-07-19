import { createBrowserRouter } from "react-router-dom";
import { Rot } from "../../rotpage/Rot";
import { Home } from "../../pages/Home";
import { Blog } from "../../pages/Blog";
import { About } from "../../pages/About";
import { Shop } from "../../pages/Shop";
import { Contactus } from "../../pages/Contactus";
import { Readmor } from "../../pages/Readmor";
import { Detels } from "../../pages/Detels";
import { Oneimges } from "../../pages/Oneimges";
import { From } from "../../pages/From";









const router=createBrowserRouter([
    {
        path:'/',
        Component:Rot,

        children:[
            {
            index: true,
            Component:Home
            },

            {
                path:'aboutus',
                Component:From
            },

            {
                path:'blogs',
                Component:Blog
            },
             {
                path:'shop',
                Component:Shop
            },
            
            {
                path:'contactus',
                Component:From
            },
            {
                path:'logo',
                Component:Home
            },
            {
                path:'read',
                Component:Readmor
            },
            {
                path:'readmor',
                Component:From
            },

          

          
          
        ]
    }
])


export default router;