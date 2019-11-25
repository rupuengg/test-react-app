import { BOOK_LIST, BOOK_VIEW } from "../actionTypes/book.action.type";

const initialState = {
  bookList: [],
  bookView: {}
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_LIST:
      return { ...state, bookList: action.payload };
    case BOOK_VIEW:
      return { ...state, bookView: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
