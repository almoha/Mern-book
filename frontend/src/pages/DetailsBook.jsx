import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailsBook = () => {
  // const book = useSelector((state) => state.booksReducer.books);
  const { id } = useParams();

  const books = useSelector((state) => state.booksReducer.books);

  const book = books.find((b) => b.id === parseInt(id));

  return (
    <div>
      <h1>{book.title}</h1>
      <small>{book.description}</small>
      <p>de {book.author}</p>
    </div>
  );
};
export default DetailsBook;
