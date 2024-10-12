

import React from 'react';
import StudentForm from '../components/StudentForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      // Send the form data to the backend API
      const response = await axios.post('/api/student', formData);
      console.log('Student added:', response.data);

      // Redirect to the student list page after successful submission
      navigate('/students');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <h1>Add New Student</h1>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddStudent;
