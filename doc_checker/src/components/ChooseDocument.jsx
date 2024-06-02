import React from 'react'
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ChooseDocument({ docType, setDocType }) {
    return (
        <>
            <Typography variant="h6" mt={5} sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                Choose the type of document you want to upload
            </Typography>
            <Box mt={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Stack spacing={3} direction="row">
                    <Button sx={{ width: '25vw', backgroundColor: docType === 'College Application Essay' ? '#6FA5ED' : '#E4E6EA', color: docType === 'College Application Essay' ? '#FFFFFF' : '#030303' }}
                        variant="contained"
                        onClick={() => setDocType('College Application Essay')}
                    >
                        College Application Essay
                    </Button>
                    <Button sx={{ width: '25vw',  backgroundColor: docType === 'Letter Of Recommendation' ? '#6FA5ED' : '#E4E6EA', color: docType === 'Letter Of Recommendation' ? '#FFFFFF' : '#030303' }}
                        variant="contained"
                        onClick={() => setDocType('Letter Of Recommendation')}
                    >
                        Letter Of Recommendation
                    </Button>
                </Stack>
                <Stack spacing={3} direction="row" mt={5}>
                    <Button sx={{ width: '25vw',  backgroundColor: docType === 'Resume' ? '#6FA5ED' : '#E4E6EA', color: docType === 'Resume' ? '#FFFFFF' : '#030303' }}
                        variant="contained"
                        onClick={() => setDocType('Resume')}
                    >
                        Resume
                    </Button>
                    <Button sx={{ width: '25vw',  backgroundColor: docType === 'Product Requirement Document' ? '#6FA5ED' : '#E4E6EA', color: docType === 'Product Requirement Document' ? '#FFFFFF' : '#030303' }}
                        variant="contained"
                        onClick={() => setDocType('Product Requirement Document')}
                    >
                        Product Requirement Document
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default ChooseDocument