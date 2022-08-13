import React from "react";
import {  Route, Router, Switch } from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamsList";
import StreamShow from "./streams/StreamsShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      {/* will get warning as the browser router internally created the history Object
      <BrowserRouter history={history}> */}
      <Router history={history}>
        <div>
          <Header />
          <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
