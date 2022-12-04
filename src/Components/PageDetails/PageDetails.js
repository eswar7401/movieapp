import React from "react";
import Details from "./Details";
const PageDetails = ({ selectedMovie, setSelectedMovie }) => {
    return (
      <div className={style.movieDetailsContainer}>
        <div className={style.movieCard}>
          <MovieItem movie={selectedMovie} />
          <Button
            color="primary"
            style={{ marginTop: "15px", marginLeft: "30%" }}
            onClick={() => {
              setSelectedMovie(null);
            }}
            variant="contained"
          >
            <i>
              {" "}
              <b>Retour</b>
            </i>
          </Button>
        </div>
        <Details movie={selectedMovie} />
      </div>
    );
  };
  
  export default PageDetails;