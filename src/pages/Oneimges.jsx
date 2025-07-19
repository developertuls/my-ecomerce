import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import carImage from "../assets/car2.png"; // ✅ Correct image import

export const Oneimges = () => {
  return (
    <div className="bgonimges ">
      <div className="p-9   w-full md:w-[79%]  mx-auto md:min-h-screen  md:flex justify-between items-center">
         





          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" w-full  md:w-[65%] sm:w-[65%]  md:mt-0 text-center md:text-left"
          >
            <h2 className="textside  font-semibold  md:text-[45px] leading-relaxed ">
              Start enjoying life, drive the car you deserve.
            </h2>
            <p className="md:text-xl text-lg font-medium ">
              We offer you the finest luxury cars at the right price.
            </p>
            <Link to="/shop">
              <button className="  md:px-6 md:py-2  hoverBtn-one-images mt-4 md:mt-7 px-3 py-1 text-xl  font-semibold border hover:rounded-full ">
                Get started
              </button>
            </Link>
          </motion.div>






          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="  map w-full md:w-[40%]  rounded-lg p-6 relative h-[195px] flex items-center justify-center  mt-5 md:mt-0"
          >
            <span className="text-black px-1 py-1 rounded-sm bg-white font-medium absolute top-3 left-3">
              $3.9 million
            </span>
            <img
              className="  p-7 md:p-0 md:ml-[-45px] imgside absolute bottom-[-39px] w-[100%] max-h-[140px] object-contain"
              src={carImage}
              alt="Luxury Car"
            />
          </motion.div>
        
      </div>





      {/* Buy section (placeholder) */}
      <div className="buy">{/* Future content */}</div>
    </div>
  );
};

