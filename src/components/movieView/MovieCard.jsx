import {Card} from "antd";

const {Meta} = Card;

const MovieCard = (movie) => {
    const {Title, Year, Poster} = movie.movie;

    return (
        <Card
            hoverable
            style={{width: 250}}
            cover={<img alt="Movie Poster" src={Poster}/>}
        >
            <Meta
                style={{textAlign: "center"}}
                title={Title}
                description={Year}
            />
        </Card>
    )
}

export default MovieCard;