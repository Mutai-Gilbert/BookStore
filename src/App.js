import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';

const App = () => (
  <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
