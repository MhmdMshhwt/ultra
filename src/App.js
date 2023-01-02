
import { Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Navbar from './components/Navbar';
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
