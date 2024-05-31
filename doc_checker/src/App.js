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
// import HomePage from './Pages/HomePage';
// import LandingPage from './Pages/LandingPage';
// import UploadDocument from './Pages/UploadDocument';


const App = () => {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUpAsPage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/expert/signup" element={<ExpertSignUp />} />

          <Route path="/document-review" element={<DocumentReview />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
    // <div className="App">
    //   {/* <DocumentReview /> */}
    //   {/* <HomePage /> */}
    //   <LandingPage/>
    //   {/* <UploadDocument /> */}
    // </div>
  );
};

export default App;
