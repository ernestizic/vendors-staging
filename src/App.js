import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import CreateNewPassword from './pages/auth/CreateNewPassword';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup'
import VerifyEmail from './pages/auth/VerifyEmail';
import CreateStore from './pages/createStore/CreateStore';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/sign-in' element= {<Login />}/>
          <Route path='/sign-up' element= {<Signup />}/>
          <Route path='/forgot-password' element= {<ForgotPassword />}/>
          <Route path='/create-new-password' element= {<CreateNewPassword />}/>
          <Route path='/reset-password' element= {<ResetPassword />}/>
          <Route path="/verify-email" element={<VerifyEmail />}/>
          <Route path="/create-store" element={<CreateStore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
