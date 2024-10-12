

// src/pages/AddClass.js
import React from 'react';
import ClassForm from '../components/ClassForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddClass() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      // Send the form data to the backend API
      const response = await axios.post('/api/class', formData);
      console.log('Class added:', response.data);

      // Redirect to the class list page after successful submission
      navigate('/classes');
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  return (
    <div>
      <ClassForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddClass;
