import React from 'react'
import Box from '@mui/material/Box';
import Img from '../images/sample_photo.png';
import { Button} from '@mui/material';

function ChangeProfilePicture() {
  return (
    <Box
                    component="section"
                    sx={{ width: '300px', padding: 5, overflowY: 'auto' }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        height="100%"
                    >
                        <Box
                            component="img"
                            src={Img}
                            alt="Sample"
                            sx={{
                                width: '10vw',
                                height: '10vw',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: 2,
                            }}
                        />
                        <Button
                            variant="contained"
                        >
                            Change Profile Picture
                        </Button>
                    </Box>
                </Box>
  )
}

export default ChangeProfilePicture