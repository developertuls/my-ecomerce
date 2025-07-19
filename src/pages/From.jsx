
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// ✅ build‑time image import (dist‑এ hash হবে)


export const From = ({ car }) => {
  /* form state + navigation */
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirm", { state: { car, email } });
  };

  /* ===================== JSX ===================== */
  return (
    <div className="text-white ">
      <section className="bg-[#fff]  px-4 md:px-10 py-10  mt-9 md:mt-[60px]">
        <h3 className="text-[#130f40]  text-center md:text-4xl sm:text-2xl text-2xl font-bold">
          Buy your car your way
        </h3>

      
          {/* -------- Left: two bullet paragraphs -------- */}
          <div className="md:mt-9 mt-5 grid md:grid-cols-2 sm:grid-cols-2 md:gap-7 sm:gap-5 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex gap-3 p-4 rounded shadow-sm bg-[#130f40] flex-1 "
            >
              <img
                src="images/ss.png"
                alt="online"
                className="w-10 h-10 rounded-full bg-[#fff] shrink-0 mt-1"
              />
              <p className="md:text-xl sm:text-1xl text-[15px] leading-relaxed ">
                Explore and pick your dream car from our online collection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex gap-3 p-4 rounded shadow-sm bg-[#130f40] flex-1"
            >
              <img
                src="images/deli.png"
                alt="email"
                className="w-10 h-10 rounded-full bg-[#fff] shrink-0 mt-1"
              />
              <p className="md:text-xl sm:text-1xl text-[15px]  leading-relaxed">
                After you select your car, our representative will reach out
                via email.
              </p>
            </motion.div>
          </div>

          {/* -------- Right: CTA + form + decorative img -------- */}
         
           <motion.div
           initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            className="bg-[#fff]  border  p-5   md:mt-9 md:flex sm:flex md:justify-between items-center">
 
          <div className="">
            <Link to="/shop">
              <button className="md:text-xl sm:text-1xl text-[15px]  mt-7 md:mt-0   ml-[60px] md:ml-0 bg-[#067e70] text-[#fff] px-9 py-3 text-sm font-semibold border border-[#833471] transition-all  hover:rounded-full">
                Get started
              </button>
            </Link>
         </div>


            {/* --- form card --- */}
     <div className="bg-slate-50 text-[#130f40] md:w-[45%] font-semibold  p-9 text-center md:text-2xl sm:text-1xl text-[15px] ">
              <span className="">Kindly provide your email below.</span>
              <form onSubmit={handleSubmit} className="mt-3 space-y-4">
                <label htmlFor="email" className="block">
                  Email address...
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 text-black border rounded focus:ring-2 focus:ring-[#FFC312] outline-none"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Password"
                  className="w-full px-4 py-2 text-black border rounded focus:ring-2 focus:ring-[#FFC312] outline-none"
                />

                <button
                  type="submit"
                  className="   w-full text-[#fff] bg-[#1B1464] py-2 rounded hover:bg-[#9895bf] transition"
                >
                  Submit
                </button>
              </form>
           </div>


        {/* =====images===== */}
        <div>
            <img
              src="images/ch.png"
              alt="decorative car"
              className="mx-auto w-[300px] rounded-full object-contain "
            />
         </div>


          </motion.div>
       
      </section>
    </div>
  );
};
