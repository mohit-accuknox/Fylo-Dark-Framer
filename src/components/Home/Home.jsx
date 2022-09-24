import React from "react";
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div>
      <section className="flex justify-center items-center flex-col gap-10 p-8 mt-16 xl:gap-16">
        <motion.img initial={{opacity:0 , width: 0}}
        animate={{width:"35%", opacity:1}}
        transition={{duration:0.4}}
        src="/images/illustration-intro.png" alt="" />
        <motion.div
        initial={{opacity:0,y:-1000}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.4, duration:0.5}}
        className="flex justify-center items-center flex-col gap-5 md:gap-8">
          <h2 className="text-3xl font-bold text-white text-center md:text-4xl md:font-[500] xl:w-[50%]">All Your files in one secure location, accessible anywhere.</h2>
          <p className="text-center text-white w-[85%] md:text-xl xl:w-[50%]">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="bg-cyanBtn p-4 w-[50%] rounded-[50px] xl:w-[30%] text-white font-medium shadow-xl hover:bg-hoverBtn transition ease-in delay-50">Get Started</button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
