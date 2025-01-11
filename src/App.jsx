import Estudios from './components/Estudios';
import NavBar from './components/NavBar';
import ScrollReveal from 'scrollreveal';
import SectionOne from './components/SectionOne';
import { useEffect } from 'react';

function App() {
  
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
      duration: 1500,
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
      reset: false
    });

    // Cleanup function
    return () => sr.destroy();
  }, []); // Array vacío para que solo se ejecute al montar

  return (
    <>
      <NavBar />
      <main className='px-5 lg:px-10'>
        <SectionOne />
        <Estudios />

      </main>
    </>
  )
}

export default App
