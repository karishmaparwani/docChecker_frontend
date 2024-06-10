import React, { useEffect, useState } from 'react';
import { Stack, Button, Stepper, Step, StepLabel, Typography, Box } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function SignUpStepper({ userData, setUserData, signUp, showModal }) {
    const fileInputRef = React.useRef(null);
    const [activeStep, setActiveStep] = useState(0);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [open, setOpen] = React.useState(false);
    const steps = ['Login info', 'Personel Info'];
    const navigate = useNavigate();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        // Reset the stepper if desired
        setActiveStep(0);
    };

    const isPasswordMatch = (val) => {
        return userData.password === val;
    }

    useEffect(() => {
        if (showModal === true) {
            setOpen(true);
        }
        
    }, [showModal])

    const handleChange = (e) => {
        let { name, value } = e.target;

        

        if (name === "confirmPassword") {
            setPasswordsMatch(isPasswordMatch(value))
        } else {
            if(name === "yearsOfExperience" ) {
                setUserData((prevUserData) => ({
                    ...prevUserData,
                    ...{ "yearsOfExperience" : parseInt(value) },
                }));
            }
            setUserData((prevUserData) => ({
                ...prevUserData,
                ...{ [name]: value },
            }));
        }
    }

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <React.Fragment>
                    <div>
                        {/* <Button onClick={handleOpen}>Open modal</Button> */}
                        <p>Finish</p>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {activeStep === 0 &&
                        <FormContainer
                            defaultValues={userData}
                            onSuccess={handleNext}
                        >
                            <Stack spacing={3} alignItems="center">
                                <TextFieldElement fullWidth label={"Firstname"} className={"fullWidth"} type={'text'} name={"firstname"} onChange={handleChange} required />
                                <TextFieldElement fullWidth label={"Lastname"} className={"fullWidth"} type={'text'} name={"lastname"} onChange={handleChange} required />
                                <TextFieldElement fullWidth label={"Email-Id"} className={"fullWidth"} type={'email'} name={"emailId"} onChange={handleChange} required />
                                <TextFieldElement fullWidth label={"Username"} className={"fullWidth"} type={'text'} name={"username"} onChange={handleChange} required />
                                <TextFieldElement fullWidth label={"Password"} className={"fullWidth"} type={'password'} name={"password"} onChange={handleChange} required />
                                <TextFieldElement fullWidth label={"Confirm Password"} id={"fullWidth"} type={'password'} name={"confirmPassword"} onChange={handleChange} required />
                                {passwordsMatch && <p>Passwords Match</p>}
                                <Button variant='contained' fullWidth type={'submit'}>Next </Button>
                                {/* <Button variant="contained" fullWidth={true}>Sign Up</Button> */}
                            </Stack>
                        </FormContainer>}

                    {activeStep === 1 &&
                        <FormContainer
                            defaultValues={userData}
                            onSuccess={signUp}
                        >
                            <Stack spacing={3} alignItems="center">
                                <div style={{ 'width': '100%' }}>
                                    <label id="profile-summary">Profile Summary</label>
                                    <textarea id="profile-summary" name="profileSummary" rows="6" style={{ 'width': '100%' }} onChange={handleChange}></textarea>
                                </div>
                                <TextFieldElement fullWidth label={"Linked In Url"} id={"fullWidth"} type={'text'} name={"linkedInUrl"} onChange={handleChange} placeholder='https://linkedin.com/....' />
                                <TextFieldElement fullWidth label={"Years of Experience"} id={"fullWidth"} type={'number'} name={"yearsOfExperience"} onChange={handleChange} required />
                                <TextFieldElement fullWidth label={"Domain"} id={"fullWidth"} type={'text'} name={"domainOfExpertise"} onChange={handleChange} required />
                                <TextFieldElement fullWidth label={"Industry"} id={"fullWidth"} type={'text'} name={"industry"} onChange={handleChange} required />
                                <Stack direction="row" spacing={5} alignItems="center" justifyContent="flex-start" style={{ 'width': '100%' }}>
                                    <label id="profile-summary">Resume</label>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        Upload file
                                      
                                    </Button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        name="resume"
                                        onChange={handleChange}
                                    />
                                   <Typography >{userData?.resume}</Typography>
                                </Stack>
                                
                                <Button variant="contained" fullWidth={true} type={'submit'}>Sign Up</Button>
                            </Stack>
                        </FormContainer>}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        {activeStep !== 0 && <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>}

                        <Box sx={{ flex: '1 1 auto' }} />

                        {/* {activeStep === 0 && <Button onClick={handleNext} variant='contained' fullWidth>Next </Button>} */}

                    </Box>
                </React.Fragment>
            )}

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Modal Title"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Thankyou for signing up as expert. Our team will get back to you shortly over email.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => navigate('/login')} color="primary" variant='contained'>
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

export default SignUpStepper;