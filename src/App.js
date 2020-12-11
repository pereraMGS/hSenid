import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import BestSellerList from "./pages/BestSellerList";
import BookDetails from "./pages/BookDetails";
import Parent from "./pages/parent";

function App() {
  return (
    <div>
      <div className="">
        {/* <BrowserRouter>
          <Switch>
            <Route path="/bookDetails">
              <BookDetails />
            </Route>
            <Route path="/">
              <BestSellerList />
            </Route>
          </Switch>
        </BrowserRouter> */}
        <Parent />
      </div>
    </div>
  );
}

export default App;
