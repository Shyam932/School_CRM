import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function TeacherForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    dob: '',
    email: '',
    salary: '',
    assignedClass: '',
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
        Add Teacher
      </Typography>

      <form onSubmit={handleSubmit}>

        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Date of Birth"
          variant="outlined"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Salary"
          variant="outlined"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Assigned Class"
          variant="outlined"
          name="assignedClass"
          value={formData.assignedClass}
          onChange={handleChange}
          margin="normal"
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

export default TeacherForm;
