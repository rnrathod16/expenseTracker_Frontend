import { createContext, useState } from "react";
import Expense from "./components/Expense/Expense";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, Redirect } from 'react-router-dom';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

export const newContext = createContext();
function App() {
  const [dm, setdm] = useState([]);
  // console.log(dm);
  const [count, setCount] = useState();
  // const [id, setid] = useState();

  // setCount(1200);
  const logged = localStorage.getItem('id');
  // console.log(logged);
  // console.log(id);
  return (
    <>
      <newContext.Provider value={{ setdm, dm, count, setCount }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {logged ? <Redirect to="/home" /> : <Signup />}
          </Route>
          <Route exact path="/login">
            {logged ? <Redirect to="/home" /> : <Login />}
          </Route>
          <Route exact path="/home">
            {logged ? <Expense /> : <Redirect to="/login" />}
          </Route>
        </Switch>
        <Footer />
      </newContext.Provider>
    </>
  );
}

export default App;
