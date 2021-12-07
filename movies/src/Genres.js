import axios from "axios";
import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";
const Genres = ({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
  type,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=961270a6625911c24261421360632cbd`
    );
    setGenres(data.genres);
    console.log(data.genres);
  };
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div style={{ padding: "6px 0" }}>
        {selectedGenres &&
          selectedGenres.map((genre) => (
            <Chip
              label={genre.name}
              style={{ margin: 2 }}
              key={genre.id}
              size="small"
              color="primary"
              clickable
              onDelete={() => handleRemove(genre)}
            />
          ))}
        {genres &&
          genres.map((genre) => (
            <Chip
              label={genre.name}
              style={{ margin: 2 }}
              key={genre.id}
              clickable
              onClick={() => handleAdd(genre)}
            />
          ))}
      </div>
    </div>
  );
};

export default Genres;
