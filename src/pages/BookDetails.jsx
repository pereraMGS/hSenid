import React, { component } from "react";
import { Link } from "react-router-dom";
import "./BookDetails.css"

class BookDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      list: []
    };
  }

  componentDidMount() {
    var selectedDate = this.props.date
    var selectedList = this.props.listName
    if (selectedDate == null || selectedDate.length == 0)
      return
    fetch(`https://api.nytimes.com/svc/books/v3/lists/${selectedDate}/${selectedList}.json?api-key=mQCbMMASxFwRUu3QdfTfpCAG5pUVXUFx`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            list: result.results.books,
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
    const { error, isLoaded, list } = this.state;

    // const { data1 } = this.props.location;
    return (
      <div className="container">
        {list.map((book) => (
          <div className="row">
            <div className="col-sm mt-5">
              <img src={book.book_image} alt="bkCoverPage"></img>
            </div>

            <div className="col-sm">

              <table class="table ">
                <th scope="col">Name Of the Book : {book.title}</th>
                <tbody>
                  <td>Rank : {book.rank}</td>
                </tbody>
                <tbody>
                  <td>Last Week Rank : {book.rank_last_week}</td>
                </tbody>
                <tbody>
                  <td>Weeks On List : {book.weeks_on_list}</td>
                </tbody>
                <tbody>
                  <td>Asterisk : {book.asterisk}</td>
                </tbody>
                <tbody>
                  <td>Dagger : {book.dagger}</td>
                </tbody>
                <tbody>
                  <td>primary_isbn10 : {book.primary_isbn10}</td>
                </tbody>
                <tbody>
                  <td>primary_isbn13 : {book.primary_isbn13}</td>
                </tbody>
                <tbody>
                  <td>Publisher : {book.publisher}</td>
                </tbody>
                <tbody>
                  <td>Author : {book.author}</td>
                </tbody>
                <tbody>
                  <td>Contributor : {book.contributor}</td>
                </tbody>
                <tbody>
                  <td>Contributor Not : {book.contributor_note}</td>
                </tbody>
                <tbody>
                  <td>Age Group : {book.age_group}</td>
                </tbody>
                <tbody>
                  <td>Description : {book.description}</td>
                </tbody>

                <a href={book.amazon_product_url}>
                  <button type="button" class="btn btn-info" onClick={book.amazon_product_url}>BOOK NOW</button>
                </a>
              </table>
            </div>

          </div>
        ))}
      </div>
    )
  }
}

export default BookDetails;