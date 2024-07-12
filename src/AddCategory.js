import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/api/category/add-category', category)
      .then(response => {
        console.log("Category successfully added!", response.data);
        setCategory({ name: '', description: '' });
      })
      .catch(error => {
        console.error("There was an error adding the category!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={category.name} 
        onChange={handleChange} 
        placeholder="Category Name" 
        required 
      />
      <input 
        type="text" 
        name="description" 
        value={category.description} 
        onChange={handleChange} 
        placeholder="Description" 
        required 
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default AddCategory;
