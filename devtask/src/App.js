import './App.css';
import Landing from './component/Landing';
import LoginScreen from './component/LoginScreen';
import {Route, Routes} from 'react-router-dom';
import SignUp from './component/SignUp';
import Account from './component/Account';

function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={<Landing />} />
     <Route path="/login" element ={<LoginScreen />} />
     <Route path="/sign" element={<SignUp />} />
     <Route path='/account' element={<Account />}/>
     </Routes>
     </>
  );
}

export default App;
