import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Components } from "./pages/components";
import { Trips } from "./pages/trips";
import { Trip } from "./pages/trip";
import { NewTrip } from "./pages/newtrip";
import { Chat } from "./pages/chat";
import { Blog } from "./pages/blog";
import { Post } from "./pages/post";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Profile } from "./pages/profile";
import { Settings } from "./pages/settings";
import { AboutUs } from "./pages/about_us";

import injectContext from "./store/appContext";
import { MyNavbar } from "./component/my-navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter basename={basename}>
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/components">
            <Components />
          </Route>
          <Route exact path="/trips">
            <Trips />
          </Route>
          <Route exact path="/trips/:id">
            <Trip />
          </Route>
          <Route exact path="/newtrip">
            <NewTrip />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/blog/:id">
            <Post />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/user/:id">
            <Profile />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          {/* <Route exact path="/faq">
							<Faq />
						</Route> */}
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route>
            <h1 className="m-4">
              Código 404: Ruta no encontrada... :(
            </h1>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
