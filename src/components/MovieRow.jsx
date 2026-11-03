import { useState } from "react";
import "./MovieRow.css";
function MovieRow({ savedList, onToggleMyList, showMyList, searchTerm }) {
    const [isWatching, setIsWatching] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const movies =[
        {
            id: 1,
            title: "money Heist",
            poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
            rating:"8.2/10",
            description: " A Criminal mastermind plans the biggest heist in history.",
            trailerId:"HQiFlg0DFdo",
            playlistId:"PLG3hCLqLLB38TUwAhrOVsM1FsX92qpfnb"
        },
        {
            id: 2,
            title: "Breaking Bad" ,
            poster: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
            rating: "9.5/10",
            description: "A chemistry teacher turns into a drug kingpin.",
            trailerId:"LVsO309kEkI",
            playlistId: "PLPLyfs2YmGkdTIqYT6dPCuM2OyVU6zTdy"
            
        },
        {
            id: 3,
            title: "Game of Thrones",
            poster: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/4240/1776193494240-i",
            rating: "9.2/10",
            description: "Noble families fight for control of the Iron Throne.",
            trailerId:"OQmJfxStYpM",
            playlistId: "PLdyYtz46NolYIY3J8Dg32ZjwiC2NGeriD"
            
        },
        {
            id: 4,
            title: "Squid Game",
            poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
            rating: "8.0/10",
            description: "People compete in deadly games to win a huge prize.",
            trailerId: "hEqk10Kbgh4",
            playlistId: "PLvahqwMqN4M0tG_5FkIbPHtjJ7JX_VUqo"
        
        },
        {
            id: 5,
            title: "Wednesday",
            poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            rating: "8.0/10",
            description: "Wednesday Addams investigates mysteries at Nevermore Academy.",
            trailerId:"E7kKBbsSQKw",
            playlistId: "PLKAL_JwNgT8oDCbCSUa1Qz_iSgWIAgBBW"
            
        }
        
    ];
    const displayedMovies = (
    showMyList
        ? movies.filter(movie =>
            savedList.some(item => item.id === movie.id)
        )
        : movies
).filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);
    return(
        <div className="movie-row">

            <h2>{showMyList ? "My List" : "Trending Series"}</h2>
            <div className="movie-container">
                {showMyList && displayedMovies.length === 0 && (
                  <p>Your My List is empty. Add some series!</p>
                )}
                {!showMyList && displayedMovies.length === 0 && (
                   <p>No series found!</p>
                )}
                {displayedMovies.map((movie) => (
                    <div
                        className="movie-card"
                        key={movie.id}
                        onClick={() => {
    setSelectedMovie(movie);
    setIsWatching(false);
}}
                        >
                        <img 
                            src={movie.poster}
                            alt={movie.title}
                        />

                        <h3>{movie.title}</h3>

                        <div className="movie-info">
                            <p>⭐ {movie.rating}</p>
                            <p>{movie.description}</p>
                            <div className="card-buttons">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedMovie(movie);
                                    }}
                                >
                                    ▶ Play
                                </button>
                                <button 
                                    onClick={(e) =>
                                    {
                                        e.stopPropagation();
                                        onToggleMyList(movie);
                                    }}
                                >
                                   {savedList.some(item => item.id === movie.id)
                                    ? "✓ Added"
                                    : "+ My List"}
                                </button>
                            </div>
                        </div>
                    

                    </div>

                ))}
            </div>

            {selectedMovie && (

    <div className="trailer-preview">

        {isWatching ? (

            <iframe
                className="trailer-video"
                src={`https://www.youtube.com/embed/videoseries?list=${selectedMovie.playlistId}&autoplay=1`}
                title={selectedMovie.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
            />

        ) : (

            <>
                <iframe
                    className="trailer-video"
                    src={`https://www.youtube.com/embed/${selectedMovie.trailerId}?autoplay=1&controls=0`}
                    title={selectedMovie.title + " Trailer"}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                />

                <div className="trailer-overlay">

                    <div className="trailer-content">

                        <h1>{selectedMovie.title}</h1>

                        <p>⭐ {selectedMovie.rating}</p>

                        <p>{selectedMovie.description}</p>

                        <button
    className="watch-btn"
    onClick={() => {
        if (selectedMovie.playlistId) {
            setIsWatching(true);
        } else {
            alert("Playlist not available!");
        }
    }}
>
    ▶ Watch Full Series
</button>

                        <button
                            className="list-btn"
                            onClick={() => onToggleMyList(selectedMovie)}
                        >
                            {savedList.some(item => item.id === selectedMovie.id)
                                ? "✓ Added"
                                : "+ My List"}
                        </button>

                    </div>

                </div>
            </>

        )}

        <button
            className="close-preview"
            onClick={() => {
                setSelectedMovie(null);
                setIsWatching(false);
            }}
        >
            ✕
        </button>

    </div>

)}
            
        </div>
    );
}
export default MovieRow;