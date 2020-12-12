import React, { component } from "react";
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

    const { match: { params } } = this.props;
    
      
    fetch(`https://api.nytimes.com/svc/books/v3/lists/${params.date}/${params.listname}.json?api-key=mQCbMMASxFwRUu3QdfTfpCAG5pUVXUFx`, {
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

    return (
      <div className="container">
        {/*Looping*/}
        {list.map((book) => (

          //add border to the details table
          <div className="row border border-info rounded mt-5">
            <div className="col-sm mt-5 " align="center">

              {/*Show book coverpage*/}
              <img src={book.book_image} alt="bkCoverPage" width="90%" height="90%"></img>
            </div>

            <div className="col-sm">
              <table class="table ">

                {/*Assign book details to the table*/}
                <th scope="col"><h1 align="center">{book.title}</h1></th>
                <tbody>
                  <td>Author :<h4>{book.author}</h4></td>
                </tbody>
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
              </table>

              {/*user can buy book using amazon web page*/}
              <a href={book.amazon_product_url}>
                <button type="button" class="btn btn-info mb-2" onClick={book.amazon_product_url}>BUY NOW</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default BookDetails;