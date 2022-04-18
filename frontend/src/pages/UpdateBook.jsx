import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';

import { updateBook } from '../features/BooksSlice';

const UpdateBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    description: '',
    author: '',
  });

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useSelector((state) =>
    id ? state.books.books.find((book) => book._id === id) : null
  );

  useEffect(() => {
    if (book) setBookData(book);
  }, [book, dispatch]);

  const clear = () => {
    setBookData({ title: '', description: '', author: '' });
  };

  // const books = useSelector((state) => state.books.books);
  // const book = books.find((b) => b._id === id);
  // // console.log(book);

  // const [title, setTitle] = useState(book.title);
  // const [description, setDescription] = useState(book.description);
  // const [author, setAuthor] = useState(book.author);

  // const handleSubmitButton = (event, id) => {
  //   event.preventDefault();
  //   console.log('submission prevented');
  //   const bookUpdated = {
  //     title: title,
  //     description: description,
  //     author: author,
  //   };

  //   console.log('client bookUpdated avantdispatch : ', bookUpdated);
  //   console.log('client bookId avantdispatch : ', id);
  //   dispatch(updateBook({ id, bookUpdated })); // ajout des {}
  //   console.log('client bookUpdated après dispatch : ', bookUpdated);
  //   console.log('useState : ', author);

  const handleChange = (event) => {
    setBookData({
      ...bookData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();

    dispatch(updateBook({ id, bookData })); // ajout des {}

    clear();

    navigate(`/detailsbook/${id}`);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmitButton}>
        <div className="title">Update</div>
        <div className="subtitle">Let's update a book!</div>
        <div className="input-container ic1">
          <input
            name="title"
            id="title"
            className="input"
            type="text"
            placeholder=" "
            value={bookData.title}
            onChange={handleChange}
          />
          <div className="cut" />
          <label htmlFor="title" className="placeholder">
            Title
          </label>
        </div>
        <div className="input-container ic2">
          <input
            name="description"
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={bookData.description}
            onChange={handleChange}
          />
          <div className="cut" />
          <label htmlFor="description" className="placeholder">
            description
          </label>
        </div>
        <div className="input-container ic2">
          <input
            name="author"
            id="author"
            className="input"
            type="text"
            placeholder=" "
            value={bookData.author}
            onChange={handleChange}
          />
          <div className="cut cut-short" />
          <label htmlFor="author" className="placeholder">
            Author
          </label>
        </div>
        <input type="submit" className="submit" name="submit" value="go" />
      </form>
    </div>
  );
};

export default UpdateBook;
