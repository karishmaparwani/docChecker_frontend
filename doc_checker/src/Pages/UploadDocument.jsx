import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MultiStepForm from '../components/MultiStepForm';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import ChooseDocument from '../components/ChooseDocument';
import GatherDocDetails from '../components/GatherDocDetails';

function UploadDocument() {
    const numberOfSteps = 4
    const [activeStep, setActiveStep] = React.useState(0);
    const [docType, setDocType] = React.useState()

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = () => {
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log("docType->",docType)

    };
    
    return (
        <>
            <Typography variant="h4" ml={5} mt={2} mb={2} sx={{ fontWeight: 'bold' }}>
                Upload Document
            </Typography>
            <Box m={5} > 
                <Box component="section" sx={{border: '1px solid #E4E6EA', height: '100%'}} pt={5} pb={5} pl={7} pr={7}>
                    <Box  p={3} sx={{border: '1px solid #909090', height: '100%'}} >
                        <MultiStepForm numberOfSteps={numberOfSteps} activeStep={activeStep}/>
                        {activeStep === 0 && <ChooseDocument setDocType={setDocType} docType={docType}/>}
                        {activeStep === 1 && <GatherDocDetails />}
                        <Stack spacing={10} direction="row" mt={5} sx={{justifyContent: 'center'}}>
                            <Button sx={{width: '20vw'}}
                                variant="contained"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                >
                                    Back
                            </Button>
                            <Button sx={{width: '20vw'}}
                                variant="contained"
                                disabled={activeStep === 0 && !docType}
                                onClick={handleNext}
                                >
                                    {activeStep === numberOfSteps - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Stack>

                        
                    </Box>
                </Box>
               
            </Box>
            
        </>
      )
}

export default UploadDocument