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
import { useSelector, useDispatch } from 'react-redux';
import LinkProduct from './pages/dashboard/products/addProductMethod/linkProduct/LinkProduct';
import { ScrollToTop } from './components/global/ScrollToTop';
import NotFound from './components/global/NotFound'
import EditProduct from './pages/dashboard/editProduct/EditProduct';
import UserProfile from './pages/dashboard/userProfile/UserProfile';
import axios from 'axios';
import { setToken, setUser } from './redux/slices/authSlice';
import ProtectedRoute from './pages/auth/ProtectedRoute';

function App() {
  const {msg, alert} = useSelector(state => state.alert)
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      dispatch(setToken(null))
      dispatch(setUser(null))
      window.location.replace("/sign-in");
    }
    return Promise.reject(error);
  });

  return (
    <div className="App">
      {alert && <Alert message={msg.message} />}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Navigate to="/products" />} />
          <Route path="products/NaN" element={<Navigate to="/products" />} />
          <Route path="products" element={<Navigate to="/products/0" />} />
          <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path='overview' element={<OverviewPage />} />
            <Route path="products/:page" element={<ProductPage />} />
            <Route path="add-product" element={<AddProductMethod />} />
            <Route path="add-product/add-product-details" element={<SingleProduct />} />
            <Route path="add-product/add-product-url" element={<LinkProduct />} />
            <Route path="products/edit/:product_id" element={<EditProduct />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>

          <Route path="verify" element={<VerifyEmail />}/>
          <Route path="create-store" element={accessToken ? <CreateStore /> : <Navigate to="/sign-in" />} />

          <Route path='sign-in' element= {accessToken ? <Navigate to="/" /> : <Login />}/>
          <Route path='sign-up' element= {accessToken ? <Navigate to="/verify" /> : <Signup />}/>
          <Route path='forgot-password' element= {<ForgotPassword />}/>
          <Route path='create-new-password' element= {<CreateNewPassword />}/>
          
          <Route path='reset-password' element= {<ResetPassword />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
