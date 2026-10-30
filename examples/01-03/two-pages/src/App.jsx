import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Home from './Home.jsx';
import Recipes from './Recipes.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/recipes">📖 Recipes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
}
