import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function GatherDocDetails(props) {
    return (
        <Box mt={5}>
            <Box component="section" sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ width: '100%' }}>
                    Number of years of relevant experience
                </Typography>
                <TextField fullWidth id="outlined-controlled"
                    value={props.yearsOfExperience}
                    onChange={(e) => props.setYearsOfExperience(e.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 40,
                        },
                    }}
                    />
            </Box>
            <Box component="section" sx={{ display: 'flex', alignItems: 'center' }} mt={3}>
                <Typography sx={{ width: '30%' }}>
                    Document Name
                </Typography>
                <TextField fullWidth id="outlined-controlled"
                    value={props.docName}
                    onChange={e => props.setDocName(e.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 40,
                        },
                    }} />
            </Box>
            <Box component="section" mt={3}>
                <Typography mb={2}>
                    Reason for having your resume reviewed? Anything you want to highlight to reviewer
                    (Job Shifting, wanted to upscale your resume.... etc.,)
                </Typography>
                <TextField
                   id="filled-multiline-static"
                   value={props.desc}
                   onChange={e => props.setDesc(e.target.value)}
                   fullWidth
                   multiline
                   rows={2}
                   variant="outlined"
                   />
            </Box>
            <Box component="section" mt={3}>
                <Typography mb={2}>
                Give a brief description about your years of experience, industry, or skills. You can also talk about your achievements or previous job experiences.
                </Typography>
                <TextField
                   id="filled-multiline-static"
                   value={props.extraInfo}
                   onChange={e => props.setExtraInfo(e.target.value)}
                   fullWidth
                   multiline
                   rows={2}
                   variant="outlined"
                   />
            </Box>
        </Box>
    )
}

export default GatherDocDetails