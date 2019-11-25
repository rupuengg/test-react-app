import React from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../actions/book.action";
import { connect } from "react-redux";

class BookList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render = () => {
    const { data } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Language</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ title, author, language, year }, index) => (
            <tr key={index}>
              <td>
                <Link to={`view/${title}`}>{title}</Link>
              </td>
              <td>{author}</td>
              <td>{language}</td>
              <td>{year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
}

const mapStateToProps = store => ({
  data: store.bookReducer.bookList
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
