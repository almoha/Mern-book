import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';

import { updateBook } from '../features/BooksSlice';

const UpdateBook = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.booksReducer.books);
  const book = books.find((b) => b.id === parseInt(id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(book.title);
  const [resume, setResume] = useState(book.resume);
  const [author, setAuthor] = useState(book.author);

  const handleSubmitButton = (id) => {
    dispatch(
      updateBook({
        id: id,
        title: title,
        resume: resume,
        author: author,
      })
    );
    navigate(`/detailsbook/${id}`);
  };

  return (
    <div className="form">
      <div className="title">Update</div>
      <div className="subtitle">Let's update a book!</div>
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
          id="resume"
          className="input"
          type="text"
          placeholder=" "
          value={resume}
          onChange={(e) => {
            setResume(e.target.value);
          }}
        />
        <div className="cut" />
        <label htmlFor="resume" className="placeholder">
          Resume
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="text"
          className="input"
          type="text"
          placeholder=" "
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <div className="cut cut-short" />
        <label htmlFor="text" className="placeholder">
          Author
        </label>
      </div>
      <button
        onClick={() => handleSubmitButton(book.id)}
        type="text"
        className="submit"
      >
        Update book!
      </button>
    </div>
  );
};

export default UpdateBook;
