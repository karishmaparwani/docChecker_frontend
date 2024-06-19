import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Img from '../images/sample_photo.png';
import { Button, TextField, Stack } from '@mui/material';

function ChangeProfileSetting() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false);

    const handleProfileSettingsUpdate = () => {
        console.log("update profile settings")
    }

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(!emailRegex.test(emailValue));
    };

    return (
        <>
            <Typography variant="h5">
                Profile Settings
            </Typography>
            <Stack spacing={3} mt={3}>
                <TextField
                    label="First Name" required
                    variant="outlined" type={'text'}
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name" required
                    variant="outlined" type={'text'}
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <TextField
                    label="Username" required
                    variant="outlined" type={'text'}
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <TextField
                    label="Email ID" required
                    variant="outlined" type="email"
                    value={email} onChange={handleEmailChange}
                    error={emailError}
                    helperText={emailError ? 'Invalid email format' : ''}
                />
                <Box display="inline-block">
                    <Button variant="contained"
                        onClick={handleProfileSettingsUpdate}
                        disabled={!firstName || !lastName || !userName || !email || emailError}>
                        Change Profile Settings
                    </Button>
                </Box>
            </Stack>
        </>
    )
}

export default ChangeProfileSetting