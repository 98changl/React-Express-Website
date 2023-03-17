import { Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Wrapper from './components/ui/Wrapper';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Documents from './pages/Documents';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Test from './pages/Test';
import Game from './pages/Game';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        {/* <Route path='/documents' element={<Documents />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/test' element={<Test />} />
        <Route path='/game' element={<Game />} />
      </Routes>
      </Wrapper>
    </div>
  );
}

export default App;