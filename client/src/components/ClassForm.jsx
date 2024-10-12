// src/components/ClassForm.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function ClassForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    teacher: '',
    maxCapacity: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        padding: 4,
        margin: '20px auto',
        maxWidth: '500px',
        backgroundColor: 'white'
      }}
    >
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', mb: 3 }}>
        Add Class
      </Typography>

      <form onSubmit={handleSubmit}>
        
        <TextField
          fullWidth
          label="Class Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Year"
          variant="outlined"
          name="year"
          type="text"
          value={formData.year}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Teacher ID"
          variant="outlined"
          name="teacher"
          value={formData.teacher}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Max Capacity"
          variant="outlined"
          name="maxCapacity"
          type="number"
          value={formData.maxCapacity}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ClassForm;
