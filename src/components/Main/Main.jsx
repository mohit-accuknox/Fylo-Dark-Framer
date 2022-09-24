import React from "react";
import {motion} from 'framer-motion'

const Main = () => {
  return (
    <div>
      <section className="flex justify-center items-center flex-col p-8 gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:p-2 md:mt-36">
        <motion.div 
        initial={{opacity:0,x:-500}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.3}}
        className="flex justify-center items-center flex-col gap-5">
          <img src="/images/icon-access-anywhere.svg" alt="" />
          <h2 className="text-white text-2xl font-medium">
            Access your files, anywhere
          </h2>
          <p className="text-white text-center xl:w-[60%]">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:500}}
        animate={{opacity:1, x:0}}
        transition={{delay:0.3, duration:0.3}}
        className="flex justify-center items-center flex-col gap-5">
          <img src="/images/icon-security.svg" alt="" />
          <h2 className="text-white text-2xl font-medium">
            Security you can trust
          </h2>
          <p className="text-white text-center xl:w-[60%]">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </motion.div>
        <motion.div 
        initial={{opacity:0 ,x:-500}}
        animate={{opacity:1, x:0}}
        transition={{delay: 0.6,duration:0.3}}
        className="flex justify-center items-center flex-col gap-5 xl:mt-10">
          <img src="/images/icon-collaboration.svg" alt="" />
          <h2 className="text-white text-2xl font-medium">
            Real-time collaboration
          </h2>
          <p className="text-white text-center xl:w-[60%]">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:500}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.8, duration:0.3}}
        className="flex justify-center items-center flex-col gap-5 xl:mt-10">
          <img src="/images/icon-any-file.svg" alt="" />
          <h2 className="text-white text-2xl font-medium">
            Store any type of file
          </h2>
          <p className="text-white text-center xl:w-[60%]">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </motion.div>
        <div className="flex justify-center items-center flex-col gap-5 mt-24 md:col-start-1 md:col-end-3 md:grid md:grid-cols-2 md:gap-12 xl:p-5">
          <motion.img initial={{width: "0", opacity: 0}} animate={{width: "80%", opacity:1}} transition={{duration: 0.6}} src="/images/illustration-stay-productive.png" alt="" />
          <motion.div
          initial={{opacity:0, x:500}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.4,delay: 0.6}}
           className="flex justify-center items-start flex-col gap-6">
            <h2 className="text-white text-2xl font-medium text-left w-full md:text-3xl xl:text-4xl xl:w-[50%]">
              Stay productive, wherever you are
            </h2>
            <p className="text-white text-lg font-light">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-white text-lg font-light">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Main;
