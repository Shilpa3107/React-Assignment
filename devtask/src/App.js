import './App.css';
import Landing from './component/Landing';
import LoginScreen from './component/LoginScreen';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={<Landing />} />
     <Route path="/login" element ={<LoginScreen />} />
     </Routes>
     </>
  );
}

export default App;
