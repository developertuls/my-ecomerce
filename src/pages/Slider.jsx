
// 🧠 Make sure framer-motion is installed
import { motion } from "framer-motion";
import img2 from "../assets/car2.png"; 
import { Link } from "react-router-dom";

export const Slider = () => {
  const slide = {
  img: img2,
  text: "Drive the Dream, Live the Luxury",
  };


  return (
    <div className=" items-center md:p-5 bg-[#0c0e12]">
    <div className="   bg-[#0c0e12] mx-auto md:mt-[79px] mt-[58px] flex flex-col md:flex-row items-center justify-between px-4 py-6 w-full ">
     
      {/* Box 1 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6,ease: "easeOut" }}
        viewport={{ once: true }}
        className="   bg-[#181b23] text-white overflow-hidden w-full    sm:w-[25%] md:w-[25%] md:h-[60vh] sm:h-[60vhpx]    shadow rounded p-4 text-center order-2 md:order-1 flex-shrink-0"
      >
        <div className="mt-[55px]">
        <h4 className="mt-[-10px] pb-6 font-semibold text-[#d4dee4] text-2xl   md:text-2xl sm:text-2xl">
          Power Reserve
        </h4>


        {/* box-1animte */}
        <div className="box-1animte  w-[100px] h-[100px] overflow-hidden   mb-5 mx-auto md:w-[108px] md:h-[108px] bg-[] rounded-full flex items-center justify-center">
          <div className="w-[95px] h-[95px]  md:w-[105px] md:h-[105px] bg-[#111c38] rounded-full flex flex-col items-center justify-center text-[13px] font-bold">
          
            <span className="md:text-2xl sm:text-2xl text-2xl ">180</span>
            <span className="text-2xl md:text-2xl sm:2xl ">km/h</span>
        
          </div>
        </div>
        <h2 className=" text-1xl mt-[6px] pb-4 md:mt-5 sm:mt-4 text-[#d4dee4] md:text-lg sm:text-lg">UNINTERRUPTED</h2>
        </div>
       </motion.div>






      {/* Slider */}
         <div className=" bgg relative w-full md:w-[50%] md:h-[60vh] rounded-lg overflow-hidden  bg-black order-1 md:order-2 flex items-center justify-center">
         <img
          src={slide.img}
          alt="Rotating Car"
          className="w-[180px] h-[180px] object-contain rounded-full animate-rotate-car"
        />
        <div className="text-center slidein-text absolute animate-bounce mb-[-139px]  text-[#d4dee4] text-lg md:text-5xl font-bold px-3 py-1 rounded shadow">
          {slide.text}
        </div>
        </div>






      {/* Box 2 */}
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 ,ease: "easeOut"}}
        viewport={{ once: true }}
        className="    bk w-full md:w-[25%] sm:w-[25%] md:h-[60vh] sm:h-[60vh]   bg-[#0c0e12] font-semibold shadow rounded p-2 text-center order-3 flex-shrink-0 text-[#d4dee4] overflow-hidden"
      >
        <p className="md:mt-[20px]   slider-box-p2 text-left p-4 md:p-0 text-[12px] mt-[40px] md:text-lg sm:text-lg text-lg">
          The world's most successful people are fulfilling their dreams by
          driving advanced cars. You too can start your journey of making dreams
          come true with a premium car.
        </p>
        <Link to={'/shop'}>
        <button className="mb-6   md:mt-[60px] sm:md:mt-[60px] lg:md:mt-[60px] md:text-lg hover:bg-[#972323] bg-[#ff4d4d] md:px-4 py-2 px-2 text-[#fff]">shop New</button>
        </Link>
      </motion.div>
    
    </div>
   </div> 
  );
};
