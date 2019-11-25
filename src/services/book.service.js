import data from "../data/books.json";

const fetchList = () => {
  return new Promise((resolve, reject) => {
    const obj = {
      payload: data
    };
    resolve(obj);
  });
};

const fetchBook = id => {
  return new Promise((resolve, reject) => {
    const list = data.filter(book => book.title === id);
    const obj = {
      payload: list[0]
    };
    resolve(obj);
  });
};

const bookService = {
  fetchList,
  fetchBook
};

export default bookService;
