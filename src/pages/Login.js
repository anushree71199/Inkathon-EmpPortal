import React from 'react'
import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Login = () => {
    const paperStyle = { padding: 20, height: '100%', width: 350, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#060b26', height: '60px', width: '60px' }
    
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon /></Avatar>
                    <h2 style={{margin: "20px"}}>Sign In</h2>
                </Grid>
                <TextField label="Username" placeholder="Enter username" fullWidth required /> &nbsp;
                <TextField label="Password" placeholder="Enter password" type="password" fullWidth required /> &nbsp;
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />

                    <Button variant="contained" style={{backgroundColor: "#060b26"}}>
                        Login
                    </Button>
                    &nbsp;
                <Typography>
                <Link href="#">Forgot password?</Link>
                </Typography>
                </FormGroup>
            </Paper>
        </Grid>
    )
}
export default Login;