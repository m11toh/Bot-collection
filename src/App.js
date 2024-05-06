import Data from './components/data';
import './App.css';
import Navbar from './components/Navbar';
import Yourbots from './components/Yourbots';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

    <Navbar />
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Data />}/>
    <Route path='/Mybots'element={<Yourbots />}/>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
