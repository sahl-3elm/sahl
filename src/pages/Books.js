import Com from '../components/Com'
import react from 'react'
import BooksComp from '../components/BooksComp.js';

export default function Books() {
    return (
        <div>
            <Com path="books" />
            <BooksComp />
        </div>
    );
}