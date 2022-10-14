import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieHeader = (props) => {
  const movie = props.movie;
  const favouriteMovies = JSON.parse(localStorage.getItem("favourites")); 

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

        {/* If the ID of a movie in favouriteMovie matches the ID of a movie, display the red heart icon inside the avatar on the movie header */}
        {favouriteMovies.find((favMovies) => favMovies.id === movie.id) ? ( 
          <Avatar sx={{ backgroundColor: 'red' }}>   {/* code from https://mui.com/material-ui/react-avatar/#icon-avatars */}
          <
            FavoriteIcon
          />
        </Avatar>
        ) : null }
      

      <Typography variant="h4" component="h3">
        {movie.title}
        <a href={movie.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem" }}>{`   "${movie.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;