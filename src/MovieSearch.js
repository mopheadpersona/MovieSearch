import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearch = () => {

	const [title, setTitle] = useState("limitless");
	
	useEffect(() => {
		async function filmData() {
			try {
				const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=f0076aec`);

				console.log(response);
			} catch (error) {
				console.log(error);
			}
		}

		filmData();
	}, [title]);

	return(
		<div className="container">
			<div className="search-bar">
				<input type="text"/>
			</div>
			<div className="movie-card">
				<img src="#" alt="film-image"/>
				<div className="card-info">
					<h1 className="title">Film name</h1>
					<div className="released">Date</div>
					<div className="rating">Rating</div>
					<div className="runtime">Duration</div>
					<div className="about">Some info about the film</div>
				</div>
			</div>
		</div>
	);
}

export default MovieSearch;