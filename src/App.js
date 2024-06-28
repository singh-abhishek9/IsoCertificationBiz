import './main.css';
import { Route, Routes } from 'react-router-dom';
import Iso_9001_2015 from './pages/Iso_9001_2015';
import Home from './pages/Home';
import Iso_2000_2011 from './pages/Iso_2000_2011';
import Iso_5001_2011 from './pages/Iso_5001_2011';
import Iso_8000_2014 from './pages/Iso_8000_2014';
import Iso_10001_2019 from './pages/Iso_10001_2019';
import Iso_13485_2016 from './pages/Iso_13485_2016';
import Iso_14001_2015 from './pages/Iso_14001_2015';
import Iso_15858_2016 from './pages/Iso_15858_2016';
import Iso_17025_2005 from './pages/Iso_17025_2005';
import Iso_21001_2018 from './pages/Iso_21001_2018';
import Iso_22000_2018 from './pages/Iso_22000_2018';
import Iso_27001_2013 from './pages/Iso_27001_2013';
import Iso_37001_2016 from './pages/Iso_37001_2016';
import Iso_41001_2018 from './pages/Iso_41001_2018';
import Iso_45001_2005 from './pages/Iso_45001_2005';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Iso_2000_2011' element={<Iso_2000_2011/>}/>
            <Route path='/Iso_5001_2011' element={<Iso_5001_2011/>}/>
            <Route path='/Iso_8000_2014' element={<Iso_8000_2014/>}/>
            <Route path='/Iso_9001_2015' element={<Iso_9001_2015/>}/>
            <Route path='/Iso_10001_2019' element={<Iso_10001_2019/>}/>
            <Route path='/Iso_13485_2016' element={<Iso_13485_2016/>}/>
            <Route path='/Iso_14001_2015' element={<Iso_14001_2015/>}/>
            <Route path='/Iso_15858_2016' element={<Iso_15858_2016/>}/>
            <Route path='/Iso_17025_2005' element={<Iso_17025_2005/>}/>
            <Route path='/Iso_21001_2018' element={<Iso_21001_2018/>}/>
            <Route path='/Iso_22000_2018' element={<Iso_22000_2018/>}/>
            <Route path='/Iso_27001_2013' element={<Iso_27001_2013/>}/>
            <Route path='/Iso_37001_2016' element={<Iso_37001_2016/>}/>
            <Route path='/Iso_41001_2018' element={<Iso_41001_2018/>}/>
            <Route path='/Iso_45001_2005' element={<Iso_45001_2005/>}/>
      </Routes>
    </div>
  );
}

export default App;
