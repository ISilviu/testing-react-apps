import PropTypes from "prop-types";
import { useState } from "react";

export default function MoviesList({ movies }) {
  const [isHidden, setHidden] = useState(false);
  return (
    <>
      <button onClick={() => setHidden(!isHidden)}>
        {isHidden ? "Show" : "Hide"}
      </button>
      {!isHidden && movies.map(({ id, title }) => <h2 key={id}>{title}</h2>)}
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};

MoviesList.defaultProps = {
  movies: [],
};
