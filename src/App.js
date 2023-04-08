import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
