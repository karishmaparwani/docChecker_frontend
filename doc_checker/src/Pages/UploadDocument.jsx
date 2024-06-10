import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MultiStepForm from '../components/MultiStepForm';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import ChooseDocument from '../components/ChooseDocument';
import GatherDocDetails from '../components/GatherDocDetails';
import '../styles/UploadDocument.css'
import UploadPDF from '../components/UploadPDF';
import SubmitPDF from '../components/SubmitPDF'
import { useNavigate } from "react-router-dom";

const documentCategories = ['College Application Essay', 'Letter Of Recommendation', 'Resume', 'Product Requirement Document']

const ResumeQuestionaire = {
    q1: 'Number of years of relevant experience',
    q2: 'Document Name',
    q3: 'Reason for having your resume reviewed? Anything you want to highlight to reviewer (Job Shifting, wanted to upscale your resume.... etc.,)',
    q4: 'Give a brief description about your years of experience, industry, or skills. You can also talk about your achievements or previous job experiences.'
}

const LORQuestionaire = {
    q1: 'Number of years of relevant experience',
    q2: 'Document Name',
    q3: 'Give a brief description of your qualifications and attributes that make you suitable for the college or program you are applying to. This can include academic achievements, extracurricular activities, leadership qualities, and personal characteristics.',
    q4: 'Any comments or extras information that you would like to share with the expert?'
}

const CollegeEssayQuestionaire = {
    q1: 'Number of years of relevant experience',
    q2: 'Document Name',
    q3: `Share a personal story or experience that illustrates something meaningful about who you are, what you value, or what you've learned. This could be an event that shaped your character, a challenge you've overcome, or a significant achievement.`,
    q4: 'Any comments or extras information that you would like to share with the expert?'
}

const PRDQuestionaire = {
    q1: 'Number of years of relevant experience',
    q2: 'Document Name',
    q3: `Give a brief description of the product for which you are writing the Product Requirement Document`,
    q4: 'Any comments or extras information that you would like to share with the expert?'
}



function UploadDocument() {
    const numberOfSteps = 4
    const [activeStep, setActiveStep] = React.useState(0);
    const [docType, setDocType] = React.useState()
    const [yearsOfExperience, setYearsOfExperience] = React.useState('')
    const [docName, setDocName] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [extraInfo, setExtraInfo] = React.useState('')
    const [document, setDocument] = React.useState()
    const navigate = useNavigate();

    const sendQuestionaire = () => {
        if(docType === 'College Application Essay') {
            return CollegeEssayQuestionaire
        }
        if(docType === 'Letter Of Recommendation') {
            return LORQuestionaire
        }
        if(docType === 'Resume') {
            return ResumeQuestionaire
        }
        if(docType === 'Product Requirement Document') {
            return PRDQuestionaire
        }

    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log("docType->", docType)

    };

    const disableNext = () => {
        if(activeStep === 0 && !docType) {
            return true
        }
        if(activeStep === 1 && (!yearsOfExperience || !docName || !desc || !extraInfo)) {
            return true
        }

        if(activeStep === 2 && !document) {
            return true
        }

        return false
    }
    const isNextDisabled = disableNext()
    return (
        <>
            <Typography variant="h4" ml={5} mt={2} mb={2} sx={{ fontWeight: 'bold' }}>
                Upload Document
            </Typography>
            <Box m={5} >
                <Box component="section" 
                    sx={{ border: '1px solid #E4E6EA', height: '100%' }} 
                    className="add-padding"
                    pt={5} pb={5}
                    >
                    <Box p={3} sx={{ border: '1px solid #909090', height: '100%', minHeight: '40vh', minWidth: '50%' }} >
                        <MultiStepForm numberOfSteps={numberOfSteps} activeStep={activeStep} />
                        {activeStep === 0 && <ChooseDocument setDocType={setDocType} docType={docType} documentCategories={documentCategories}/>}
                        {activeStep === 1 &&
                            <GatherDocDetails 
                                yearsOfExperience={yearsOfExperience} setYearsOfExperience={setYearsOfExperience}
                                docName={docName} setDocName={setDocName}
                                desc={desc} setDesc={setDesc}
                                extraInfo={extraInfo} setExtraInfo={setExtraInfo}
                                questionsObj={sendQuestionaire()}
                            />
                        }
                        {activeStep === 2 && <UploadPDF setDocument={setDocument} document={document}/>}
                        {activeStep === 3 && <SubmitPDF />}
                        <Stack spacing={10} direction="row" mt={5} sx={{ justifyContent: 'center' }}>
                            {activeStep !== numberOfSteps - 1 ?
                            <>
                                <Button sx={{ width: '20vw' }}
                                    variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Back
                                </Button>
                                <Button sx={{ width: '20vw' }}
                                    variant="contained"
                                    disabled={isNextDisabled}
                                    onClick={handleNext}
                                >
                                    {activeStep === numberOfSteps - 2 ? 'Submit' : 'Next'}
                                </Button>
                            </> :
                            <Button sx={{ width: '20vw' }}
                                variant="contained"
                                disabled={isNextDisabled}
                                onClick={() => navigate("/customer-home")}
                            >
                                Done
                            </Button>
                        } 
                        </Stack>


                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default UploadDocument