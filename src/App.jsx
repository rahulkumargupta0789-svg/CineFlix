import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from"./components/Hero";
import MovieRow from "./components/MovieRow";
function App(){
  const [savedList, setSavedList] = useState(() => {
    const storedList = localStorage.getItem("myList");

    try {
        return storedList ? JSON.parse(storedList) : [];
    } catch {
        return [];
    }
});

const [showMyList, setShowMyList] = useState(false);
const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  localStorage.setItem("myList", JSON.stringify(savedList));
}, [savedList]);

const toggleMyList = (movie) => {
  const exists = savedList.some(
    item => item.id === movie.id 
  );
  if (exists){
    setSavedList(
      savedList.filter(item => item.id !== movie.id)
    );
  }else {
    setSavedList([...savedList, movie]);
  }
};

  return(
    <>
    <Navbar
      onMyListClick={() => setShowMyList(!showMyList)}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
    />
    
    {!showMyList && <Hero />}
    <MovieRow 
      savedList={savedList}
      onToggleMyList={toggleMyList}
      showMyList={showMyList}
      searchTerm ={searchTerm}
    
    />
    
    </>
  );

}
export default App;