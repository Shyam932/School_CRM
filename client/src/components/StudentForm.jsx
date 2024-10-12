// import React, { useState } from 'react';

// function StudentForm({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     gender: 'Male',
//     dob: '',
//     email: '',
//     feesPaid: '',
//     class: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="student-form">
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter student name"
//           required
//         />
//       </div>

//       <div>
//         <label>Gender:</label>
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//         >
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//       </div>

//       <div>
//         <label>Date of Birth:</label>
//         <input
//           type="date"
//           name="dob"
//           value={formData.dob}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter email"
//           required
//         />
//       </div>

//       <div>
//         <label>Fees Paid:</label>
//         <input
//           type="number"
//           name="feesPaid"
//           value={formData.feesPaid}
//           onChange={handleChange}
//           placeholder="Enter fees paid"
//           required
//         />
//       </div>

//       <div>
//         <label>Class:</label>
//         <input
//           type="text"
//           name="class"
//           value={formData.class}
//           onChange={handleChange}
//           placeholder="Enter class name"
//           required
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default StudentForm;


import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    dob: '',
    email: '',
    feesPaid: '',
    class: ''
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
        Add Student
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
          label="Fees Paid"
          variant="outlined"
          name="feesPaid"
          type="number"
          value={formData.feesPaid}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Class"
          variant="outlined"
          name="class"
          value={formData.class}
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

export default StudentForm;

