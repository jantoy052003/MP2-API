import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCards = ({movie}) => {
  return (
    <>
        <Card style={{ width: '20rem' }} className= " cardsContainer mx-3 my-3">
            <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} /> {/**completes the path to the poster */} 
            <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>
                    {movie.overview}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> {/**maybe the button will bring up modal that will show the movie preview or trailer??? */}
            </Card.Body>
        </Card>
    </>
  )
}

export default MovieCards
