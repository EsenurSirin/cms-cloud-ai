// UpdateCategory.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateCategory = () => {
  const [category, setCategory] = useState({
    id: '',
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
    axios.put('http://localhost:8081/api/category/update-category', category)
      .then(response => {
        console.log("Category successfully updated!", response.data);
        setCategory({ id: '', name: '', description: '' });
      })
      .catch(error => {
        console.error("There was an error updating the category!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="id" 
        value={category.id} 
        onChange={handleChange} 
        placeholder="Category ID" 
        required 
      />
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
      <button type="submit">Update Category</button>
    </form>
  );
};

export default UpdateCategory;
