import React from "react";
import Typed from 'typed.js';
import { Icon } from "@iconify/react/dist/iconify.js";
import Profile from './../assets/image-reference.svg'
import 'animate.css';

export default function SectionOne() {
    //ScrollReveal



    //TYped.js
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['desarrollador', 'programador', 'freelancer', 'diseñador web'],
        typeSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return(
        <>
            <div className="flex flex-col lg:flex-row mx-auto w-full pt-36 lg:pt-0 lg:w-[1200px] bg-[rgba(33, 33, 39, 0.7)] h-screen lg:items-center gap-16 lg:gap-0" id="inicio">
                <div className="lg:w-8/12 lg:pr-8">
                    <p className="inline-flex text-sm lg:text-2xl animate__animated animate__backInDown animate__delay-0s font-semibold text-gray-400 font-inter">Hola<Icon icon="fluent-emoji:waving-hand"/></p>
                    <h2 className="text-[20px] lg:text-[52px] font-semibold flex lg:-mt-3 mb-3 lg:mb-4 animate__animated animate__delay-2s animate__pulse font-inter">Soy Carlos y soy <p className="font-semibold ml-2 lg:ml-4 bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent"><span ref={el} className="" /></p></h2>
                    <p className="mb-4 text-sm lg:text-lg lg:pr-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam, quo sit temporibus vero libero. Laudantium repudiandae iste quas soluta nostrum odit quo, nam amet molestias suscipit provident ex officiis.</p>
                    <div className="w-full join gap-3">
                        <a href="/" target="_blank" className="text-2xl animate__heartBeat animate__animated animate__delay-0s"><Icon icon="ic:baseline-facebook" className="text-2xl" /></a>
                        <a href="/" target="_blank" className="text-2xl animate__heartBeat animate__animated animate__delay-1s"><Icon icon="mdi:instagram" className="text-2xl" /></a>
                        <a href="/" target="_blank" className="text-2xl animate__heartBeat animate__animated animate__delay-0s"><Icon icon="mdi:linkedin" className="text-2xl" /></a>
                        <a href="/" target="_blank" className="text-2xl animate__heartBeat animate__animated animate__delay-1s"><Icon icon="mdi:github" className="text-2xl" /></a>
                    </div>
                </div>


                <div className="img-container lg:w-4/12 backdrop-blur-sm">
                    <img src={Profile} alt="" />
                </div>
            </div>
        </>
    );
}