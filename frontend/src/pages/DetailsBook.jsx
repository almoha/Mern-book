import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getOneBook } from '../features/BooksSlice';

const DetailsBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const book = useSelector((state) => state.books.book);
  // const book = books.find((b) => b._id === id);

  useEffect(() => {
    dispatch(getOneBook(id));
  }, [id, dispatch]);

  return (
    <div>
      <h1>{book.title}</h1>
      <small>{book.description}</small>
      <p>de {book.author}</p>
    </div>
  );
};
export default DetailsBook;
