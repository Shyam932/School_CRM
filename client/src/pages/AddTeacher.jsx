

import React from 'react';
import TeacherForm from '../components/TeacherForm';  // Import the TeacherForm component
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTeacher() {
  const navigate = useNavigate();

  // Handle the form submission
  const handleSubmit = async (formData) => {
    try {
      // Send the form data to the backend API
      const response = await axios.post('/api/teacher', formData);
      console.log('Teacher added:', response.data);

      // Redirect to the teacher list page after successful submission
      navigate('/teachers');
    } catch (error) {
      console.error('Error adding teacher:', error);
    }
  };

  return (
    <div>
      <h1>Add New Teacher</h1>
      <TeacherForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddTeacher;

