
import { Link } from "react-router-dom";
import { motion } from "motion/react";




export const Blog = () => {
  return (
    <div className="bg-white min-h-screen px-4 py-8 text-[#130f40]">
      
      {/* Top Blog Feature Section */}
      <div className="md:mt-[76px] h-[82vh] sm:flex md:flex bg-[#e6f4f5] rounded-md overflow-hidden shadow">
  <motion.div 
  initial={{opacity:0,x:0,transition:0}}
  animate={{x:19 ,opacity:1}}
  transition={{direction:1.9}}
   className="p-4 mt-[70px] animate-fade-in-up">
   <h2 className="md:text-3xl text-xl font-semibold mb-2">
    Top 5 luxury cars under 30 lakh in BD
   </h2>
   <p className="md:text-xl text-lg">
    Looking to buy a premium car without breaking the bank? Here are our top picks...
   </p>
  <Link to={'/shop'}>
    <button className="md:text-lg text-xl md:px-4 p-1 px-2 py-1 rounded-lg border mt-3 text-[#fff] hover:underline bg-[#130f40]">
      Read more
    </button>
  </Link>
</motion.div>





        {/* img */}
        <img
          src="images/map4.webp"
          alt="Blog"
          className="mx-auto mt-[-30px] md:mt-0 sm:w-[60%] md:w-[60%] md:h-[]  sm:h-[] object-cover items-center 
          opacity-0 animate-fade-in"
        />

      
      </div>




      {/* Blog Grid Section */}
      <div className="mt-12">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Latest Car Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          




          {/* Card 1 */}
          <div className="   bg-[#e6f4f5]  shadow-md rounded-md overflow-hidden">
            <img src="images/check1.png" className="mx-auto mt-4 rounded-full max-w-xl-[80%]" />
            <div className="p-4 mt-[-60px]">
              <h2 className="mt-8  font-semibold mb-2 md:text-2xl text-lg ">
               Must-check documents before buying a car
              </h2>
              <p className="md:text-lg text-xl">
               Avoid costly mistakes know which papers to verify before your purchase.
              </p>
              <Link><button className="border rounded-lg md:text-lg text-xl md:px-4 p-1 px-2 py-1 bg-[#130f40] mt-3 text-[#fff] hover:underline ">Read more</button></Link>
            </div>
          </div>




          {/* Card 2 */}
          <div className="bg-[#e6f4f5] shadow-md rounded-md overflow-hidden">
            <img src="images/cd.png " className="animate-pulse bg-[#6cb0fb] mx-auto mt-9 rounded-full max-w-[50%]" />
            <div className="p-4">
              <h2 className=" font-semibold mb-2 md:text-2xl text-lg">
               buy car online but..!!
              </h2>
              <p className="md:text-lg text-xl">
                Things You Should Do When Buying a Car Online or
                Essential Steps to Follow When Purchasing a Car Online.
              </p>
              <button className="  md:text-lg text-xl md:px-4 p-1 px-2 py-1 bg-[#130f40] md:mt-[40px] text-[#fff]   hover:underline  rounded-lg border">Read more</button>
            </div>
          </div>




          {/* Card 3 */}
          <div className="bg-[#e6f4f5] shadow-md rounded-md overflow-hidden">
            <img src="images/was1.webp" className="mt-7   w-[90%] mx-auto  object-cover" />
            <div className="p-4">
              <h2 className="md:text-2xl text-lg font-semibold mb-2">
              5 Best Tips for Car Maintenance
              </h2>
              <p className="text-gray-600 md:text-lg text-xl">
               Keep your car running like new with these essential maintenance tips.
              </p>
              <button className="mt-3  md:text-lg text-xl md:px-4 p-1 px-2 py-1 bg-[#130f40] md:mt-[40px] text-[#fff] hover:underline   rounded-lg border
              ">Read more</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
