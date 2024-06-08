import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import SignUpAsPage from './Pages/SignUpAsPage';
import SignUp from './Pages/SignUp/SignUp';
import ExpertSignUp from './Pages/ExpertSignUp/ExpertSignUp';
import Login from './Pages/Login/Login';
import DocumentReview from './Pages/DocumentReview';
import CustomerHomePage from './Pages/CustomerHomePage';
import LandingPage from './Pages/LandingPage';
import UploadDocument from './Pages/UploadDocument';
import ExpertHomePage from './Pages/ExpertHomePage'
import InvalidAccess from './Pages/InvalidAccess'
import SideBar from './components/SideBar'
import ProtectedRoutes from './components/ProtectedRoutes';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginLeft: 240, 
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 200, 
    },
  },
}));

const MainContent = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.mainContent}>{children}</div>;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const noSidebarPaths = ['/', '/login', '/signup-as', '/signup', '/expert/signup'];
  const shouldShowSidebar = !noSidebarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowSidebar && <SideBar />}
      {shouldShowSidebar ? <MainContent>{children}</MainContent> : children}
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
       <Layout>
          

          
          <Routes>
            <Route exact path="/" element={<LandingPage />} />

            <Route path="/login" element={<Login />} />

            <Route exact path="/signup-as" element={<SignUpAsPage />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/expert/signup" element={<ExpertSignUp />} />

            <Route path="/document-review" element={<ProtectedRoutes Component={<DocumentReview />} allowCustomer={true} allowExpert={true} />} />

            <Route path="/upload-document" element={<ProtectedRoutes Component={<UploadDocument />} allowCustomer={true} allowExpert={false} />} />

            <Route path="/customer-home" element={<ProtectedRoutes Component={<CustomerHomePage />} allowCustomer={true} allowExpert={false} />} />

            <Route path="/expert-home" element={<ProtectedRoutes Component={<ExpertHomePage />} allowCustomer={false} allowExpert={true} />} />

            <Route path="/invalid-access" element={<InvalidAccess />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          
        </Layout>
      </Router>



    </>
  );
};

export default App;
