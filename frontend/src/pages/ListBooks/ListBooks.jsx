import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBooks, detailsBook, deleteBook } from '../../features/BooksSlice';

import './ListBooks.css';

const ListBooks = () => {
  const booksList = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleClickDelete = (id) => {
    dispatch(deleteBook({ id: id }));
  };

  // const handleClickDetails = (id) => {
  //   dispatch(detailsBook({ id: id }));
  // };

  // const handleClickupdate = (id) => {
  //   dispatch(
  //     updateBook({ id: id, title: 'Test', resume: 'test', author: 'test' })
  //   );
  // };

  useEffect(() => {
    // marche sans
    dispatch(getBooks);
  }, [booksList, dispatch]);

  return (
    <div className="wrapper">
      {booksList.map((book) => {
        return (
          <div key={book.id}>
            <p>{book.id}</p>
            <h3>{book.title}</h3>
            <small>{book.resume}</small>
            <p>{book.author}</p>

            <Link to={`/detailsbook/${book.id}`}>
              <button
                className="btn"
                // onClick={() => handleClickDetails(book.id)}
              >
                View
              </button>
            </Link>

            <Link to={`/updatebook/${book.id}`}>
              <button className="btn">Update</button>
            </Link>

            {/* <button
              className="btn"
              onClick={() => handleClickupdate(book.id, book)}
            >
              Update
            </button> */}
            <button className="btn" onClick={() => handleClickDelete(book.id)}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ListBooks;
