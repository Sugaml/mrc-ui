import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add logic to handle form submission
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={10} sm={8} md={6}>
        <Paper elevation={5} style={{ padding: '2rem' }}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <LockOutlinedIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h1">Change Password</Typography>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
            <TextField
              name="oldPassword"
              label="Old Password"
              type="password"
              value={oldPassword}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              name="newPassword"
              label="New Password"
              type="password"
              value={newPassword}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              name="confirmPassword"
              label="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1.5rem' }}>
              Change Password
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

