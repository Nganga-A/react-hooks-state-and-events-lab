import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //state variable to keep track of the current mode
  const [darkMode, setDarkMode] = useState(false); //app starts in light mode 
 

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode) //changes from true to false
  };

  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
