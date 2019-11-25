import React from "react";
import { connect } from "react-redux";
import { getBook } from "../../actions/book.action";

class Book extends React.Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
  }

  render = () => {
    const { title, author, year, language, link } = this.props.data;
    return (
      <>
        <div className="card">
          <h5 className="card-header">{title}</h5>
          <div className="card-body">
            <h5 className="card-title">{author}</h5>
            <p className="card-text">{language}</p>
            <a href={link} className="btn btn-primary">
              {year}
            </a>
          </div>
        </div>
      </>
    );
  };
}

const mapStateToProps = store => ({
  data: store.bookReducer.bookView
});

const mapDispatchToProps = dispatch => ({
  getBook: id => dispatch(getBook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
