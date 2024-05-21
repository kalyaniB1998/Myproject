
import './App.css';
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Task from './components/Task';
import ManageUser from './components/ManageUser';
import AboutUs from './components/AboutUs';
import GetReport from "./components/GetReport";
import Ranking from "./components/Ranking"
import FeeReport from "./components/FeeReport";
// import ManageTask from "./components/manageTask";
import Message from "./components/Message";
import Request from "./components/Request";
import BatchSummary from "./components/BatchSummary";
import SendMessage from "./components/SendMessage";
import Logout from './components/Logout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/task' element={<Task/>}></Route>
      <Route path='/manageuser' element={<ManageUser/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/ranking' element={<Ranking/>}></Route>
      <Route path='/getreport' element={<GetReport/>}></Route>
      <Route path='/batchesSummary' element={<BatchSummary/>}></Route>
      <Route path='/request' element={<Request/>}></Route>
      <Route path='/message' element={<Message/>}></Route>
      {/* <Route path='/manageTask' element={<ManageTask/>}></Route> */}
      <Route path='/feeReport' element={<FeeReport/>}></Route>
      <Route path='/sendMessage' element={<SendMessage/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
