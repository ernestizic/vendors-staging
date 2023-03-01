import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import CreateNewPassword from './pages/auth/CreateNewPassword';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup'
import VerifyEmail from './pages/auth/VerifyEmail';
import CreateStore from './pages/createStore/CreateStore';
import ProductPage from './pages/dashboard/products/Products';
import OverviewPage from './pages/dashboard/overview/Overview';
import DashboardLayout from './components/layout/dashboardLayout/DashboardLayout';
import AddProductMethod from './pages/dashboard/products/addProductMethod/AddProductMethod';
import SingleProduct from './pages/dashboard/products/addProductMethod/singleProduct/SingleProduct';
import Alert from './components/global/alert/Alert';
import { useSelector } from 'react-redux';

function App() {
  const {msg, alert} = useSelector(state => state.alert)
  return (
    <div className="App">
      {alert && <Alert message={msg.message} />}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/products/0" />} />
          <Route path="/products" element={<Navigate to="/products/0" />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/products/:page" element={<ProductPage />} />
            <Route path="/add-product" element={<AddProductMethod />} />
            <Route path="add-product/add-product-details" element={<SingleProduct />} />
            <Route path='/overview' element={<OverviewPage />} />
          </Route>

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
