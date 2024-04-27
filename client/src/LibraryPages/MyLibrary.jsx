// MyLibrary.jsx
import React, { useState, useEffect } from 'react';
import LibrairieNavBar from '../components/LibrairieNavBar';

function MyLibrary() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books') // Changez l'URL en fonction de votre configuration
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            {/* Composant LibrairieNavBar à gauche */}
            <div style={{ flex: '1' }}>
                <LibrairieNavBar />
            </div>
            
            {/* Contenu de MyLibrary à droite */}
            <div style={{ flex: '2' }}>
                <div>
                    <h1>My Library</h1>
                    <ul>
                        {books.map(book => (
                            <li key={book.id}>
                                <h2>{book.title}</h2>
                                <p>Author: {book.author}</p>
                                <p>Description: {book.description}</p>
                                <p>Type: {book.type}</p>
                                {book.type === 'livre électronique' && (
                                    <p>URL du livre électronique: {book.urlFile}</p>
                                )}
                                {book.type === 'livre audio' && (
                                    <p>URL du livre audio: {book.urlAudio}</p>
                                )}
                                <p>Date de publication: {new Date(book.datePublished).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MyLibrary;
