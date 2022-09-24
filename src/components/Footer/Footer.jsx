import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-footer p-10 flex justify-center items-start flex-col gap-14 xl:gap-28 relative xl:p-10 lg:grid lg:grid-cols-3 lg:items-center lg:mx-auto">
        
        <ul className="mt-16 flex justify-center items-start flex-col gap-5 lg:mt-0 xl:grid xl:grid-cols-2 xl:mt-16 xl:mv-16">
          <li className="xl:col-start-1 xl:col-end-2">
            <img src="/images/logo.svg" alt="" />
          </li>
          <li className="flex justify-start items-start gap-5 text-white xl:col-start-1 xl:col-end-3">
            <img src="/images/icon-location.svg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              eligendi autem magnam sunt. Inventore dolorum perspiciatis autem
              blanditiis. Deleniti aliquid totam ab in voluptates.
            </p>
          </li>
          <li className="flex justify-start items-start gap-5 text-white ">
            <img src="/images/icon-phone.svg" alt="" />
            <p>+1-543-123-4567</p>
          </li>
          <li className="flex justify-start items-start gap-5 text-white">
            <img src="/images/icon-email.svg" alt="" />
            <p>example@fylo.com</p>
          </li>
        </ul>

        <ul className="flex justify-center items-start flex-col gap-4 text-white">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
        </ul>

        <ul className="flex justify-center items-start flex-col gap-4 text-white">
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
