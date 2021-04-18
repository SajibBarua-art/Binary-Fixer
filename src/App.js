import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddService from './Components/AddService/AddService';
import AddTestimonial from './Components/AddTestimonial/AddTestimonial';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookOrder from './Components/BookOrder/BookOrder';
import BookingList from './Components/BookingList/BookingList';
import Dashboard from './Components/Dashboard/Dashboard';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import Manage from './Components/Manage/Manage';

export const UserContext = createContext();

function App() {
  const [userState, setUserState] = useState({});
  return (
    <UserContext.Provider value={[userState, setUserState]}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/order/:id'>
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path='/orderList'>
            <BookingList isAdmin={true}></BookingList>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path='/manage'>
            <Manage></Manage>
          </PrivateRoute>

          <PrivateRoute path='/bookOrder'>
            <BookOrder></BookOrder>
          </PrivateRoute>
          <PrivateRoute path='/bookingList'>
            <BookingList isAdmin={false}></BookingList>
          </PrivateRoute>
          <PrivateRoute path='/addTestimonial'>
            <AddTestimonial></AddTestimonial>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
