import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import BestSellerList from "./pages/BestSellerList";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/bookDetails/:listname/:date"
            component={BookDetails}
          ></Route>
          <Route path="/">
            <BestSellerList/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
