import { Icon } from "@iconify/react";


export default function NavBar() {

    return(
        <>
            <div className="navbar bg-transparent backdrop-blur-sm top-0 fixed z-10" id="navbar-prueba">
                <div className="navbar-start">
                    <div className="dropdown z-100">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow ">
                        
                        <li><a href="#inicio"><Icon icon="tabler:home" />Inicio</a></li>
                        <li><a href="#estudios"><Icon icon="tabler:lamp-2" />Estudios</a></li>
                        <li><a href="#proyectos"><Icon icon="eos-icons:project-outlined" />Proyectos</a></li>
                        <li><a href="#contacto"><Icon icon="hugeicons:job-share" />Experiencia Laboral</a></li>
                        <li><a href="#contacto"><Icon icon="hugeicons:contact-01" />Contacto</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        
                        <li><a href="#inicio"><Icon icon="tabler:home" />Inicio</a></li>
                        <li><a href="#estudios"><Icon icon="tabler:lamp-2" />Estudios</a></li>
                        <li><a href="#proyectos"><Icon icon="eos-icons:project-outlined" />Proyectos</a></li>
                        <li><a href="#experiencia-laboral"><Icon icon="hugeicons:job-share" />Experiencia Laboral</a></li>
                        <li><a href="#contacto"><Icon icon="hugeicons:contact-01" />Contacto</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost">
                        <Icon icon="ic:baseline-whatsapp" className="text-2xl" />
                        
                    </a>
                </div>
            </div>

        </>
    );

} 