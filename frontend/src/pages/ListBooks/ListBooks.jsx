import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  // getBooks,
  // detailsBook,
  // deleteBook,
  getAllBooks,
  destroyBook,
} from '../../features/BooksSlice';

import './ListBooks.css';

const ListBooks = () => {
  const booksList = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleClickDelete = (id) => {
    dispatch(destroyBook(id));
  };

  // const handleClickDetail = (id) => {
  //   console.log('ok');
  //   dispatch(getOneBook(id));
  //   navigate(`detailsbook/${id}`);
  // };

  // const handleClickDetails = (id) => {
  //   dispatch(detailsBook({ id: id }));
  // };

  // const handleClickupdate = (id) => {
  //   dispatch(
  //     updateBook({ id: id, title: 'Test', description: 'test', author: 'test' })
  //   );
  // };

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div className="wrapper">
      {booksList.map((book) => {
        return (
          <div key={book._id}>
            <p>{book._id}</p>
            <h3>{book.title}</h3>
            <small>{book.description}</small>
            <p>{book.author}</p>

            <Link to={`/detailsbook/${book._id}`}>
              <button className="btn">View</button>
            </Link>

            <Link to={`/updatebook/${book._id}`}>
              <button className="btn">Update</button>
            </Link>

            {/* <button
              className="btn"
              onClick={() => handleClickupdate(book._id, book)}
            >
              Update
            </button> */}
            <button className="btn" onClick={() => handleClickDelete(book._id)}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ListBooks;
