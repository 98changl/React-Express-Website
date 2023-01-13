import { Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Wrapper from './components/ui/Wrapper';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Documents from './pages/Documents';
import Contact from './pages/Contact';
import Test from './pages/Test';

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
        <Route path='/test' element={<Test />} />
      </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
