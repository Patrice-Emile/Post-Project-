import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthorsPage from "./pages/AuthorsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// L'APPLICATION
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/postpage/:id" component={PostPage} />
        <Route path="/createpost" component={CreatePostPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
