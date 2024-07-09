/** @format */

import { useState } from 'react';

function Book({ title, author, description, subtitle, image }) {
  const [isRead, setIsRead] = useState(false);

  return (
    <div className="user-profile">
      <img src={image} alt={title} />
      <h2>Title: {title}</h2>
      <h4>Subtitle: {subtitle}</h4>
      <h3>By {author}</h3>
      <p>Description: {description}</p>
      <button className="btn btn-primary" onClick={() => setIsRead(!isRead)}>
        {isRead ? 'Read' : 'Unread'}
      </button>
    </div>
  );
}
export default Book;

// show in App.jsx
{
  /* {booksData.items.map((book, index) => (
        <Book
          key={index}
          title={book.volume.title}
          author={book.volume.authors}
          description={book.volume.description}
          subtitle={book.volume.subtitle}
          image={book.volume.image}
        />
      ))} */
}

/*
  Book data:
  const books = [
    {
      id: 1,
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel.',
    },
    {
      id: 2,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the Jazz Age.',
    },
  ];

  
*/
