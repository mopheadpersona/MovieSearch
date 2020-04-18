import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Fade } from 'reactstrap';

const MovieCard = ({ data, fadeIn }) => {
	const posterSrc = data.Poster.slice(0, -7) + '1000.jpg';

	return(
		<div className="film-card" style={{padding: "10px"}}>
			<Fade in={fadeIn}>
				<Card>
					<CardImg src={posterSrc} alt="film-image" top width="50%"/>
					<CardBody>
						<CardTitle style={{fontSize: "2rem"}}>{data.Title}</CardTitle>
						<div className="year"><b>Year:</b> {data.Year}</div>
						<div className="rating" ><b>IMDb rating:</b> {data.imdbRating}</div>
						<div className="runtime" ><b>Duration:</b> {data.Runtime}</div>
						<CardText>{data.Plot}</CardText>
					</CardBody>
				</Card>
			</Fade>
		</div>
	);
}

export default MovieCard;