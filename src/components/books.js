import React from 'react';
import '../App.css';

const Books = () => (
  <div className="books">
    <ul>
      <li>
        Beyond Order
        <span>Jordan Peterson</span>
      </li>
      <li>
        Mpas of Meaninng
        <span>Jordan Peterson</span>
      </li>
      <li>
        12 Rules for Life
        <span>Jordan Peterson</span>
      </li>
      <li>
        Sapiens
        <span>Yuval Harrari</span>
      </li>
    </ul>
    <form>
      <input type="text" placeholder="Book title..." />
      <input type="text" placeholder="Book Author" />
      <input type="submit" />
    </form>
  </div>
);

export default Books;
