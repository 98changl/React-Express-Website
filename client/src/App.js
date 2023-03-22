import { Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Wrapper from './components/ui/Wrapper';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Documents from './pages/Documents';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Game from './pages/Game';
import ModalTest from './pages/ModalTest';
import GetAPI from './pages/GetAPI';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/modal' element={<ModalTest />} />
          <Route path='/game' element={<Game />} />
          <Route path='/apitest' element={<GetAPI />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
