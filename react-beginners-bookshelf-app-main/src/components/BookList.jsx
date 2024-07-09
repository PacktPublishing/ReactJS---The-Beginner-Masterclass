/** @format */

import BookCard from './BookCard';

function BookList({ books, onSeeMore }) {
  return (
    <div className="row mt-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onSeeMore={onSeeMore} />
      ))}
    </div>
  );
}

export default BookList;
