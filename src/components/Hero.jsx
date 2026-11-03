import { useState } from "react";
import{ Play,Info,X} from "lucide-react";
import"./Hero.css";
function Hero(){
    const [isPlaying, setIsPlaying] = useState(false);
    return(
        <section className="hero">
            <div className="hero-content">
                <p className="featured">CINEFLIX ORIGINAL</p>
                <h1>THE DARK KNIGHT</h1>
                <p className="hero-description">
                    When the menance knows as the jocker as the Joker emerges,Batman msut accept one of the greatest psychological and physical tests of his ability to fight injustice.
                </p>
                <div className="hero-buttons">
                    <button
    className="play-btn"
    onClick={() => setIsPlaying(true)}
>
    <Play size={20} />
    Play Now
</button>
                   
                        <button className="info-btn">
                            <Info size={20} />
                            More Info


                        </button>
                    </div>
                </div>
            
            {isPlaying && (
                <div className="hero-trailer">
                    <iframe
                        src="https://www.youtube.com/embed/GokKUqLcvD8?autoplay=1&rel=0"
                        title="The Dark Knight Official Trailer"
                        allow="autoPlay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    />
                    <button
                        className="close-hero-trailer"
                        onClick={() => setIsPlaying(false)}
                    >
                        <X size={25} />
                    </button>
                </div>
            )}
        </section>
    );
}
export default Hero;