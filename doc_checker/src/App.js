import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUpAsPage from './Pages/SignUpAsPage';
import SignUp from './Pages/SignUp/SignUp';
import ExpertSignUp from './Pages/ExpertSignUp/ExpertSignUp';
import Login from './Pages/Login/Login';
import DocumentReview from './Pages/DocumentReview';
import CustomerHomePage from './Pages/CustomerHomePage';
import LandingPage from './Pages/LandingPage';
import UploadDocument from './Pages/UploadDocument';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          
          <Route exact path="/" element={<LandingPage/>} />
          
          <Route path="/login" element={<Login />} />

          <Route exact path="/signup-as" element={<SignUpAsPage />} />

          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/expert/signup" element={<ExpertSignUp />} />

          <Route path="/document-review" element={<DocumentReview />} />
          
          <Route path="/upload-document" element={<UploadDocument />} />

          <Route path="/customer-home" element={<CustomerHomePage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
