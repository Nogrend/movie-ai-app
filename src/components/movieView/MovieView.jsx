import MovieCard from "./MovieCard.jsx";
import PropTypes from "prop-types";
import {List, Row} from "antd";

const MovieView = ({movies}) => {

    movies.map((movie, index) => (
            <MovieCard key={index} movie={movie}/>
        )
    )
    return (<>
            <List
                grid={{
                    justify: "space-evenly",
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                }}
                  dataSource={movies}
                  renderItem={(movie) => (

                      <List.Item>
                          <MovieCard title={movie["imdbID"]} movie={movie}/>
                      </List.Item>

                  )}
            />
        </>
    )
}

MovieView.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MovieView;