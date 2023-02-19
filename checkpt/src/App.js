
import './App.css';

import Navbar from './components/Navbar';
import FullName from './components/FullName';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='body'>
    
      <Navbar/>
      <FullName/>
      <Projets/>
      <Contact/>
      <Footer/>
      
     
      </div>
  );
}

export default App;
