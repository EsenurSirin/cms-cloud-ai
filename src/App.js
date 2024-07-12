import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddCategory from './AddCategory';
import UpdateCategory from './UpdateCategory';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/add-category">Add Category</Link>
          <Link to="/update-category">Update Category</Link>
        </nav>
        <Routes>
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/update-category" element={<UpdateCategory />} />
          <Route path="/" element={<h1>Welcome</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
