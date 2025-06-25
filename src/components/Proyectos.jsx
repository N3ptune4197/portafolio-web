import { Icon } from "@iconify/react";
import Ecoconomia from "./../assets/ecoconomia.jpeg";
import SimpleCoffe from './../assets/SimpleCoffe.jpeg';
import SimpleHomepage from './../assets/SimpleHomepage.jpeg';


export default function Proyectos() {

    const proyectos = [
        {nombre: "Ecoconomía", descripcion: "Sitio de aprendizaje de Economía", link: "https://nep-ecoconomia.netlify.app/", image: Ecoconomia },
        {nombre: "Simple Coffee Listing", descripcion: "Descripción del proyecto 1", link: "https://nep-simple-coffee-listing.netlify.app/", image:SimpleCoffe },
        {nombre: "Simple Homepage", descripcion: "Descripción del proyecto 1", link: "https://nep-news-simple-homepage.netlify.app/", image: SimpleHomepage },

    ]

    return(
        <>
            <article className="flex flex-col pt-20 overflow-hidden lg:overflow-visible lg:w-[1210px] mx-auto" id="proyectos">
                <h2 className="text-3xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text" id="scroll-title" >Proyectos</h2>

                <div className="flex flex-col flex-wrap gap-x-7 gap-y-5 md:flex-row items-center justify-center ">
                    
                    {
                        proyectos.map((proyecto, index) => (
                            <div key={index} className="card bg-base-100 w-80 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={proyecto.image}
                                        alt={proyecto.nombre}
                                        className="rounded-xl w-full h-48 object-cover" 
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{proyecto.nombre}</h2>
                                    <p>{proyecto.descripcion}</p>
                                    <div className="card-actions">
                                        <a 
                                            href={proyecto.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                        >
                                            Ver Proyecto
                                            <Icon icon="mdi:external-link" className="ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                

            </article>
        </>
    );
}