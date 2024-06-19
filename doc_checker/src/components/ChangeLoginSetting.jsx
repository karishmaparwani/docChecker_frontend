import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Img from '../images/sample_photo.png';
import { Button, TextField, Stack } from '@mui/material';

function ChangeLoginSetting() {
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [confirmPass, seConfirmPass] = useState("")
    return (
        <>
            <Typography variant="h5">
                Login Settings
            </Typography>

            <Stack spacing={3} mt={3}>
                <TextField
                    required
                    label="Old Password"
                    variant="outlined"
                />
                <Box display="flex" gap={2}>
                    <TextField
                        required
                        label="New Password"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                    />
                </Box>
                <Box display="inline-block">
                    <Button variant="contained">Change Password</Button>
                </Box>
            </Stack>
        </>
    )
}

export default ChangeLoginSetting