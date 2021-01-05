import React, { useState, useEffect } from "react";
import { Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"

const Saved = () => {
    const [books, setBooks] = useState([]);

    const loadSavedBooks = async () => {
        try {
            const saved = await API.getSavedBooks();
            setBooks(saved.data);
        } catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        loadSavedBooks();
    }, [books]);

    const handleDeleteBook = async (id) => {
        try {
            await API.deleteBook(id)
            const savedBooks = books.filter(book => book.id !== id);
            setBooks(savedBooks);
        } catch (err) {
            throw err;
        }
    }

    return(
        <Container fluid>
            <Jumbotron />
            <Row>
                {books.length ? (
                    <div className="row row-cols-3" style={{ justifyContent:"center"}}>
                        {books.map((book) => {
                            return (
                                <div
                                    key={book._id}
                                    className="card col-sm-3"
                                    style={{ margin: "5px" }}
                                >
                                    <img
                                        src={
                                            book.image
                                                ? book.image
                                                : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
                                        }
                                        className="card-img-top"
                                        style={{ height: 300 }}
                                        alt="..."
                                    ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {book.title}
                                        </h5>
                                        <p className="card-text">
                                            {book.description
                                                ? book.description.length >=
                                                    200
                                                    ? book.description.slice(
                                                            0,
                                                            200
                                                        )
                                                    : book.description
                                                : "No Description Available"}
                                        </p>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handleDeleteBook(book._id)
                                            }
											>
												Remove
											</button>
                                        <a
                                            href={book.link}
                                            rel="noopener noreferrer"
                                            target={"_blank"}
                                            className="card-link"
                                        >
                                            Book Link
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <h3>No Results to Display</h3>
                )}
			</Row>
        </Container>
    )
}

export default Saved;