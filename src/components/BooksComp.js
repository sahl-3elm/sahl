import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BooksComp() {
  const books_api_url = 'https://shaheen101sec.pythonanywhere.com/api/books';  // Make sure the URL is correct
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get(books_api_url)
      .then((response) => {
        setBooks(response.data);
        setFilteredBooks(response.data); // Initially, show all books
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term === "") {
      setFilteredBooks(books); // If no search term, show all books
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredBooks(filtered); // Filter books based on the search term
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Search Bar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="ابحث عن كتاب..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ padding: '10px', width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      {/* Book List */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'space-between', padding: '15px' }}>
        {filteredBooks.map((book, index) => (
          <div
            className="card shaheen-card"
            style={{ width: '18rem', margin: '15px', display: 'flex', transition: 'transform 0.3s ease, box-shadow 0.3s ease', flex: '1 0 18rem' }}
            key={index}
          > 
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">Book: {book.title}</p>
              <a href={book.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                إنتقل
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
