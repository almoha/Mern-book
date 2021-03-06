import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { /*addBook,*/ createBook } from '../../features/BooksSlice';

import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const booksList = useSelector((state) => state.books.books);

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmitButton = () => {
    // const idBookAdded = booksList[booksList.length - 1].id + 1;
    dispatch(
      createBook({
        // id: idBookAdded,
        title,
        description,
        author,
      })
    );
    setTitle('');
    setdescription('');
    setAuthor('');

    const idBookAdded = booksList[booksList.length - 1]._id; // pb je récupére le livre avant celui inséré
    console.log(idBookAdded);
    navigate(`/detailsbook/${idBookAdded}`);
  };

  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's add a book!</div>
      <div className="input-container ic1">
        <input
          id="title"
          className="input"
          type="text"
          placeholder=" "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="cut" />
        <label htmlFor="title" className="placeholder">
          Title
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="description"
          className="input"
          type="text"
          placeholder=" "
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <div className="cut" />
        <label htmlFor="description" className="placeholder">
          description
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="text"
          className="input"
          type="text"
          placeholder=" "
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <div className="cut cut-short" />
        <label htmlFor="text" className="placeholder">
          Author
        </label>
      </div>
      <button onClick={handleSubmitButton} type="text" className="submit">
        Add book!
      </button>
    </div>
  );
};
export default AddBook;
