import React from "react";
import {motion} from 'framer-motion'

const Testimonial = () => {
  return (
    <div>
      <section className="flex justify-center items-center flex-col p-10 gap-10 mt-[200px] md:grid md:grid-cols-2 xl:grid-cols-3 xl:mt-0 xl:mt-16 xl:p-36">
        <motion.div
        initial={{x:-500,opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.4}}
        className="bg-testimonial text-white p-7 rounded-lg shadow-lg flex justify-center items-center flex-col gap-5 xl:mb-10">
          <p className="font-normal text-white">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex justify-start items-center w-full gap-3">
            <img
              className="rounded-full w-[40px]"
              src="/images/profile-1.jpg"
              alt=""
            />
            <div>
              <h3 className="font-medium">Satish Patel</h3>
              <p className="text-xs font-normal">Founder & CEO, Huddle</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4,duration:0.3}}
        className="bg-testimonial text-white p-7 rounded-lg shadow-lg flex justify-center items-center flex-col gap-5 xl:mb-10">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex justify-start items-center w-full gap-3">
            <img
              className="rounded-full w-[40px]"
              src="/images/profile-2.jpg"
              alt=""
            />
            <div>
              <h3 className="font-medium">Bruce McKenzie</h3>
              <p className="text-xs font-normal">Founder & CEO, Huddle</p>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{opacity:0, x:500}}
        animate={{opacity:1, x:0}}
        transition={{delay:0.7,duration:0.4}}
        className="bg-testimonial text-white p-7 rounded-lg shadow-lg flex justify-center items-center flex-col gap-5 mb-[400px] xl:mb-10">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex justify-start items-center w-full gap-3 ">
            <img
              className="rounded-full w-[40px]"
              src="/images/profile-2.jpg"
              alt=""
            />
            <div>
              <h3 className="font-medium">Iva Boyd</h3>
              <p className="text-xs font-normal">Founder & CEO, Huddle</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonial;
