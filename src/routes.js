import { Switch, Route } from "react-router-dom";

import AboutMe from "./components/AboutMe";
//import Projects from "./components/Projects";
import MyApp from "./components/MyApp";
import ContactMe from "./components/ContactMe";

//import projects from "./data/projectCards";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about-me">
        <AboutMe />
      </Route>
      {/* //{" "}
      <Route exact path="/projects">
        // <MyProjects projects={projects} />
        //
      </Route> */}
      <Route exact path="/my-app">
        <MyApp />
      </Route>
      <Route exact path="/contact-me">
        <ContactMe />
      </Route>
      <Route exact path="/">
        <AboutMe />
      </Route>
    </Switch>
  );
};

export default Routes;
