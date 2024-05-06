import Data from './components/data';
import './App.css';
import Navbar from './components/Navbar';
import Yourbots from './components/Yourbots';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

    
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/'element={<Data />}/>
    <Route path='/Mybots'element={<Yourbots />}/>
    <Route path='/Myspec/:id'element={<Yourbots />}/>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
