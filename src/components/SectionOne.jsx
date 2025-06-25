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
            <div className="flex flex-col md:flex-row mx-auto w-full pt-20 md:pt-20 lg:pt-36 lg:w-[1210px] bg-[rgba(33, 33, 39, 0.7)] lg:h-[98vh] lg:items-center gap-16 lg:gap-0" id="inicio">
                <div className="lg:w-8/12 lg:pr-8 my-auto">
                    <p className="inline-flex text-sm lg:text-2xl font-semibold text-gray-400 font-inter" id="saludo-inicio">Hola<Icon icon="fluent-emoji:waving-hand"/></p>
                    <h2 className="text-[20px] lg:text-[52px] font-semibold flex lg:-mt-3 mb-3 lg:mb-4 font-inter" id="presentacion">Soy Carlos y soy <p className="font-semibold ml-2 lg:ml-4 bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent"><span ref={el} className="" /></p></h2>
                    <p className="mb-4 text-xs lg:text-lg lg:pr-14 parrafo-inicio">Desarrollador web con pasión por crear soluciones digitales efectivas. Me gusta transformar ideas en aplicaciones que realmente importen y generen valor.</p>
                    <div className="w-full join gap-3 parrafo-inicio" id="">
                        <a href="https://www.facebook.com/FabianCheroMendoza/" target="_blank" className="text-2xl animate__heartBeat animate__animated animate__delay-2s"><Icon icon="ic:baseline-facebook" className="text-2xl" /></a>
                        <a href="https://www.instagram.com/carlos.mendozq14/" target="_blank" className="text-2xl animate__heartBeat animate__animated animate__delay-3s"><Icon icon="mdi:instagram" className="text-2xl" /></a>
                        <a href="/" target="_blank" className="text-2xl animate__heartBeat animate__animated animate__delay-2s"><Icon icon="mdi:linkedin" className="text-2xl" /></a>
                        <a href="https://github.com/N3ptune4197" target="_blank" className="text-2xl animate__heartBeat animate__animated animate__delay-3s"><Icon icon="mdi:github" className="text-2xl" /></a>
                    </div>
                </div>


                <div className="img-container lg:w-4/12 backdrop-blur-sm">
                    <img src={Profile} alt="Foto Perfil" title="Carlos" id="imagen-inicio" />
                </div>
            </div>
        </>
    );
}