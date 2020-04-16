import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Search from './Search';
import { Spinner, Alert, Container } from 'reactstrap';

const MovieSearch = () => {
	
	const [movieData, setData] = useState({});
	const [name, setName] = useState(null);
	const [fadeIn, setFadeIn] = useState(false);
	//const [preview, setPreview] = useState({});

	const toggle = () => setFadeIn(true);
	const fade = () => setFadeIn(!true);
	const newTitle = e => setName(e.target.value);

	async function filmData() {
		try {
			const response = await axios.get(`http://www.omdbapi.com/?t=${name}&apikey=f0076aec`);				
			setData(response.data);
		} catch (error) {
			return(
				<Alert color="danger">
					<h4>Error!</h4>
					<p>{error}</p>
				</Alert>
			);
		}
	}


	if(!movieData){
		return (<Spinner color="danger"></Spinner>);
	}

	return(
		<Container className="themed-container">
			<Search onSubmit={e => {
						e.preventDefault(); 
						filmData();
						toggle();
					}}
					value={name}
					onChange={e => {newTitle(e); fade();}}
			/>
			<MovieCard data={movieData} fadeIn={fadeIn} />
	    </Container>
	);
}

export default MovieSearch;