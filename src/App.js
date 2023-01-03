import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const categories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [showItems, setShowItems] = useState(items);

  const filterMenu = (category) => {
    if (category === 'all') {
      setShowItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setShowItems(newItems);
  }

  return (
    <section className="menu">
      <div className="title">
        <h1>Our menu</h1>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterMenu={filterMenu} />
      <Menu items={showItems} />
    </section>
  );
}

export default App;
