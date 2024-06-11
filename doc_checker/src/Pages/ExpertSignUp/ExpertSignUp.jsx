import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../../images/landing_page_img.png'
import '../SignUpAs/SignUpAsPage.css'
import { Stack, Container } from '@mui/material';
import SignUpStepper from '../../components/SignUpStepper/SignUpStepper.Component'
import useAxios from '../../hooks/UseAxios.hook';

const ExpertSignUp = () => {
    const [userData, setUserData] = useState({})
    const [profile, setProfileData] = useState({})
    const [showModal, setShowModal] = useState(false)
    const { data, setBody } = useAxios({
        url: '/auth/expert/signup',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        autoFetch: false
    });

    const handlePostData = () => {
        setBody({
            ...userData,
            profile
        })

    };

    useEffect(() => {
        if (data && Object.keys(data).length)
            setShowModal(true)
    }, [data])

    return (
        <div>
            <Box sx={{ height: '92vh', marginTop: "17px" }} >

                <Grid container spacing={2}>
                    <Grid item xs={6} className='parentDivFullHeight'>
                        <img src={image} alt='landing_image' />
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="flex-start" item xs={6}>

                        <Stack direction="column" spacing={10} style={{ width: '100%', "margin-top": "30px" }}>
                            <Stack direction="column" spacing={1} justifyContent="center" alignItems="center">
                                <h1 >Expert Sign Up</h1>
                                <p>Enter Login Details to Access DocChecker</p>
                            </Stack>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Container maxWidth="sm">
                                    <SignUpStepper userData={userData} setUserData={setUserData} signUp={handlePostData}
                                        showModal={showModal} profile={profile} setProfileData={setProfileData}/>

                                </Container>
                                <p>Already a member? <a href='/login'>Login</a></p>
                            </Stack>
                        </Stack>
                    </Grid>

                </Grid>
            </Box>


        </div>
    );
};

export default ExpertSignUp;
