import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //keep track of selected items
  const [selectedCategory, setSelectedCategory] =useState('All')
  

  // Event handler select element change event
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

    //Filter items based on the selected category
    const filteredItems = selectedCategory === 'All' ? items // If 'all' category is selected, show all items
    : items.filter(item => item.category === selectedCategory); //if not all only selected


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
