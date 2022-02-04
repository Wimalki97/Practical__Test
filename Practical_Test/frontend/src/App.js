
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/All/common/footer";
import AddUser from "./components/All/user/addUser";
import SignIn from "./components/All/user/login";
import SignUp from "./components/All/user/register";
import Dash from "./components/All/dashboad/dashboad";

function App() {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <section>
        <Switch>
              <Route path="/addUser" component={AddUser} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/dashboad" component={Dash} />
              
              <Route path="/" component={SignIn}/>
            </Switch>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
