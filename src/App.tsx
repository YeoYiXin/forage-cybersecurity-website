import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Info from "./Info";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="app-container overflow-hidden bg-beige">
      <NavBar onMenuToggle={toggleMenu} onSearchToggle={toggleSearch} />
      {menuOpen && (
        <div className="menu-overlay" onClick={toggleMenu} />
      )}
      {searchOpen && (
        <div className="search-overlay" onClick={toggleSearch} />
      )}
      <Info/>
    </div>
  );
}

export default App;
