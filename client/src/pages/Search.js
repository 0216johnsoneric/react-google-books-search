import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const Search = () => {
	const [books, setBooks] = useState([]);
	const [searchBook, setSearchBook] = useState("");

	const handleInputChange = (event) => {
		const { value } = event.target;
		setSearchBook(value);
	};

	const handleFormSubmit = (event) => {
		console.log("event", event);
		event.preventDefault();
		API.getBooks(searchBook)
			.then((res) => {
				setBooks(res.data.items);
			})
			.catch((err) => console.log(err));
	};
	const handleSaveBook = (event, data) => {
		event.preventDefault();

		API.saveBook(data)
			.then((res) => alert("Book Saved!"))
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Jumbotron />
			<Row>
				<Container fluid>
					<h3>Book Search</h3>
					<Input
						placeholder="Search Google Books"
						onChange={handleInputChange}
					/>
					<FormBtn onClick={handleFormSubmit}>Search</FormBtn>
				</Container>
			</Row>
			<Row>
				<Container>
					{books.length ? (
						<div
							className="row row-cols-3"
							style={{ justifyContent: "center" }}
						>
							{books.map((book) => {
								return (
									<div
										key={book.id}
										className="card col-sm-3"
										style={{ margin: "5px" }}
									>
										<img
											src={
												book.volumeInfo.imageLinks
													? book.volumeInfo.imageLinks.thumbnail
													: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
											}
											className="card-img-top"
											style={{ height: 300 }}
											alt="..."
										></img>
										<div className="card-body">
											<h5 className="card-title">
												{book.volumeInfo.title}
											</h5>
											<p className="card-text">
												{book.volumeInfo.description
													? book.volumeInfo.description.length >=
													  200
														? book.volumeInfo.description.slice(
																0,
																200
														  )
														: book.volumeInfo.description
													: "No Description Available"}
											</p>
											<button
												className="btn btn-primary"
												onClick={(e) =>
													handleSaveBook(e, {
														title: book.volumeInfo.title,
														image: book.volumeInfo.imageLinks
															? book.volumeInfo.imageLinks
																	.thumbnail
															: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
														author: book.volumeInfo.authors[0],
														description:
															book.volumeInfo.description,
														link: book.volumeInfo.infoLink,
													})
												}
											>
												save
											</button>
											<a
												href={book.volumeInfo.infoLink}
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
				</Container>
			</Row>
		</Container>
	);
};
export default Search;
