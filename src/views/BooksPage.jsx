import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectBooks, fechBooks } from "../store/booksSlice.js";
import { useEffect } from "react";

import { Link } from "react-router-dom";

function BooksPage() {

  const dispatch = useDispatch();
	const books = useSelector(selectBooks).books;
	const pageTitle = "📖 Book List with Router, Redux & Firebase";

  const bookStatus = useSelector(selectBooks).status;

	useEffect(() => {

		if(bookStatus == 'idle'){
      dispatch(fechBooks());
    }

	}, []);

	return (
		<>
			<div className="container">
				<Header pageTitle={pageTitle} />
				<div className="books-container">

          { 
            books.length ?
          
            <div className="books-list">
              {books.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>

            :
            
            bookStatus == 'loading' ?

            <div className="loader"><p>Loading...</p></div>

            :
            
            <div className="loader"><p>Your book list is empty. <Link to = "/add-book">Click here</Link> to add a new book.</p></div>

          }

				</div>
			</div>
		</>
	);
}

export default BooksPage;
