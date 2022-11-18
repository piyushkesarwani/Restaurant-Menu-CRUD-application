import './App.css';
import React, { useState } from 'react'
import MenuItemsArray from './data';
import Menu from './Menu';
import Category from './Category';

const allCategories = ['all', ...new Set(MenuItemsArray.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(MenuItemsArray);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(MenuItemsArray);
      return;
    }
    const newItems = MenuItemsArray.filter((single) => single.category === category)
    setMenuItems(newItems);
  }

  return (
    <main>
      <h2 className='title'>Our Menu</h2>
      <div className='category'>
        <Category categories = {categories} filterItems = {filterItems}/>
      </div>
      <div className='menuItemGrid'>
        <Menu menuItems = {menuItems}/>
      </div>
    </main>
  );
}

export default App;
