import Estudios from './components/Estudios';
import NavBar from './components/NavBar';
import ScrollReveal from 'scrollreveal';
import SectionOne from './components/SectionOne';

function App() {
  ScrollReveal({reset:true}).reveal('.child-li-scroll-left', { delay: 100, duration: 800, origin: 'left', distance: '150px', scale: 0.5 });
  ScrollReveal({reset:true}).reveal('.child-li-scroll-right', { delay: 100, duration: 800, origin: 'right', distance: '150px', scale: 0.5 });
  ScrollReveal({reset:true}).reveal('#inicio', { delay: 200, duration: 2000, origin: 'bottom', distance: '100px' });

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
