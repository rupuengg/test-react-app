import bookService from "../services/book.service";
import { BOOK_LIST, BOOK_VIEW } from "../actionTypes/book.action.type";

export const getBooks = dispatch => {
  bookService
    .fetchList()
    .then(res => {
      dispatch({
        type: BOOK_LIST,
        payload: res.payload
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getBook = id => dispatch => {
  bookService
    .fetchBook(id)
    .then(res => {
      dispatch({
        type: BOOK_VIEW,
        payload: res.payload
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const bookAction = {
  getBooks
};

export default bookAction;
