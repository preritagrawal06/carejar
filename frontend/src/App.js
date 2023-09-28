//import './App.css';
import Section1 from './Pages/section1';
import Section2 from './Pages/section2';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{justifyContent: "center", display: "flex"}}>
      <Routes>
        <Route path='/' element={<Section1/>}/>
        <Route path="/:specialist" element={<Section2/>}/>
      </Routes>
    </div>
  );
}

export default App;
