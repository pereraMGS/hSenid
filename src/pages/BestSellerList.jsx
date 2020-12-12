import React, { component } from "react";
import "./BestSellerList.css";
import { Link } from "react-router-dom";

class BestSellerList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      lists: []
    };
  }

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=mQCbMMASxFwRUu3QdfTfpCAG5pUVXUFx", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          lists: result.results,

        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
  }

  render() {
    const {lists } = this.state;
    return (
      <div>
        <h2 className="m-5" align="center">Best Beller List</h2>
        <table class="table table-hover">
          <thead>
            <tr>

              {/*Column Names*/}
              <th >List Name</th>
              <th >Display Name</th>
              <th>List Name Encoded</th>
              <th>Oldest Published Date</th>
              <th>Newest Published Date</th>
              <th>Updated</th>
              <th  >View Details</th>
            </tr>
          </thead>

          <tbody>

            {/*Looping*/}
            {lists.map((category) => (

              <tr>
                {/*Assign data to the table*/}
                <td>{category.list_name}</td>
                <td>{category.display_name}</td>
                <td>{category.list_name_encoded}</td>
                <td>{category.oldest_published_date}</td>
                <td>{category.newest_published_date}</td>
                <td>{category.updated}</td>
                <td>

                  {/*See More button link to the BookDetails Page*/}
                  <Link to={`/bookDetails/${category.list_name}/${category.oldest_published_date}`}> <button type="button" class="btn btn-info" width="100px" >See More</button></Link>

                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    )
  }
}

export default BestSellerList;