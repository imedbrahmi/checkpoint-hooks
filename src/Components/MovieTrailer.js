import React from "react";
import { Card } from "react-bootstrap";

const MovieTrailer = (movie) => {
  return (
    <div className="Details">
      <Card className="text-center">
        <Card.Header className="text-muted"><h1>{movie.name}</h1></Card.Header>
        <Card.Body>
          <Card.Text>
            {movie.trailer}
            <hr />

            <h4 className="text-muted">Overview :</h4>
            <p>{movie.description}</p>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </div>
  );
};

export default MovieTrailer;