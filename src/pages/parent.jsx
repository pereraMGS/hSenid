import React from "react";
import BestSellerList from "./BestSellerList";
import BookDetails from "./BookDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";


class Parent extends React.Component {

 state = {
  list: '',
  date: ''
 }
 handleData = (list, date) => {
  this.setState({
   list: list,
   date: date
  });
 }




 render() {
  return (
   <div>

    <div className="">



     <BrowserRouter>
      <Switch>
       <Route path="/bookDetails">
        <BookDetails listName={this.state.list} date={this.state.date} />
       </Route>
       <Route path="/">
        <BestSellerList onListNameChange={this.handleData} />
       </Route>
      </Switch>
     </BrowserRouter>

    </div>
   </div>
  );
 }
}

export default Parent;
