import Estudios from './components/Estudios';
import NavBar from './components/NavBar';
import ScrollReveal from 'scrollreveal';
import SectionOne from './components/SectionOne';
import { useEffect } from 'react';
import Proyectos from './components/Proyectos';

function App() {

  //Inicianializar ScrollReveal
  useEffect(() => {
    // Configurar ScrollReveal
    const sr = ScrollReveal({
      reset: true,
      duration: 800,
      delay: 50
    });

    // Aplicar las animaciones
    sr.reveal('.child-li-scroll-left', { 
      origin: 'left',
      scale: 0.5,
      distance: '120px'
    });
    
    sr.reveal('.child-li-scroll-right', { 
      origin: 'right',
      scale: 0.5,
      distance: '120px'
    });
    
    sr.reveal('#scroll-title', { 
      duration: 1400,
      origin: 'top',
      distance: '100px'
    });

    sr.reveal('#presentacion', { 
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });

    sr.reveal('#saludo-inicio', { 
      duration: 2000,
      origin: 'top',
      distance: '100px'
    });

    sr.reveal('.parrafo-inicio', { 
      duration: 2000,
      origin: 'bottom',
      distance: '100px'
    });

    sr.reveal('#imagen-inicio', { 
      duration: 2000,
      origin: 'right',
      distance: '100px',
    });

    sr.reveal('#image-graduation', {
      duration: 2000,
      origin: 'right',
      distance: '100px',
    })
    
    sr.reveal('#navbar-prueba', {
      duration: 2000,
      origin: 'top',
      distance: '50px',
    }) 

    sr.reveal('.card-project', {
      duration: 1000,
      origin: 'top',
      distance: '50px',
    })
    
    






    // Cleanup function
    return () => sr.destroy();
  }, []); // Array vacío para que solo se ejecute al montar

  return (
    <>
        <NavBar />

      <main className='px-4 md:px-7 max-w-[1250px] mx-auto lg:px-10 overflow-hidden'>
        <SectionOne />
        <Estudios />
        <Proyectos />

      </main>
    </>
  )
}

export default App;
