import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/auth/Signup'
import VerifyEmail from './pages/auth/VerifyEmail';
import CreateStore from './pages/createStore/CreateStore';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/sign-up' element= {<Signup />}/>
          <Route path="/verify-email" element={<VerifyEmail />}/>
          <Route path="/create-store" element={<CreateStore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
