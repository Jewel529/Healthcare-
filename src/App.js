import "./App.css";

import Home from "./pages/home/Home/Home";
import Footer from "./pages/shared/Footer/Footer";
import Login from "./pages/authentication/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import Products from "./pages/shop/Products/Products";
import Team from "./pages/Team/Team";
import Registration from "./pages/authentication/Registration/Registration";

import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./pages/authentication/PrivateRoute/PrivateRoute";
import ServiceDetails from "./pages/ServicesDetails/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/shop">
              <Products></Products>
            </PrivateRoute>
            <Route exact path="/jointeam">
              <Team></Team>
            </Route>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
