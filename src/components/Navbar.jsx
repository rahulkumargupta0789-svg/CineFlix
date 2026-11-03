import{ Search, Bell, User} from "lucide-react";
import "./Navbar.css";

function Navbar({ onMyListClick, searchTerm, onSearchChange }){
    return (
        <nav className="navbar">
            <div className = "nav-left">
                <h1 className="logo">CINE<span>FLIX</span></h1>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="#movies">Movies</a>
                    <a href="#series">TV Shows</a>
                    <a href="#mylist" onClick={(e) => {
                        e.preventDefault();
                        onMyListClick();
                    }}>
                        My List
                    </a>
                </div>

            </div>
            <div className="nav-right">
                <Search size={21}/>
                <input
                type="text"
                placeholder= "Search series..."
                value ={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
                />
                <Bell size={21}/>
                <div className="profile">
                    <User size={19}/>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;