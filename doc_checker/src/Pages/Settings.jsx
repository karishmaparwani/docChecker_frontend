import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ChangeProfilePicture from '../components/ChangeProfilePicture';
import ChangeProfileSetting from '../components/ChangeProfileSetting';
import ChangeLoginSetting from '../components/ChangeLoginSetting';

function Settings() {
    return (
        <Box display="flex" flexDirection="column" height="90vh" >
            <Typography variant="h4" ml={5} mt={2} mb={2} sx={{ fontWeight: 'bold' }}>
                Settings
            </Typography>
            <Box display="flex" flexGrow={1} overflow="hidden" sx={{ border: '1px solid #E4E6EA' }}>
                <ChangeProfilePicture />
                <Box
                    component="section"
                    sx={{ flexGrow: 1, overflowY: 'auto', padding: 5 }}
                >
                    <Grid container spacing={4} direction="column">
                        <Grid item>
                            <ChangeProfileSetting />
                        </Grid>
                        <Grid item>
                            <ChangeLoginSetting />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default Settings;
