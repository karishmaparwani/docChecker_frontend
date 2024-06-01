import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../../images/landing_page_img.png'
import Logo from '../../images/logo.png'
import '../SignUpAsPage.css'
import { Stack, Button, Container } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import useAxios from '../../hooks/UseAxios.hook'

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setUrl, setMethod, setBody, refetch, data } = useAxios({
        url: 'https://api.example.com/data',
        headers: { 'Content-Type': 'application/json' },
        autoFetch: false
    });

    const handlePostData = () => {
        setUrl('/auth/login');
        setMethod('POST');
        setBody({ username: userName, password: password })
        refetch();
    };

    useEffect(() => {
        if (data && Object.keys(data).length)
            sessionStorage.setItem('userInfo', JSON.stringify(data))
    }, [data])

    return (
        <div>
            <Box sx={{ height: '92vh', marginTop: "20px" }} >

                <Grid container spacing={2}>
                    <Grid item xs={6} className='parentDivFullHeight'>
                        <img src={image} alt='landing_image' />
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center" item xs={6}>

                        <Stack direction="column" spacing={6} style={{ width: '100%' }}>
                            <Stack direction="column" spacing={1} justifyContent="center" alignItems="center">
                                <img src={Logo} alt='DocChecker_Logo' />
                                <h1>DocChecker</h1>
                                <p>Login</p>
                            </Stack>
                            <Stack direction="column" spacing={1} justifyContent="center" alignItems="center">
                                <Container maxWidth="sm">

                                    <FormContainer
                                        defaultValues={{ username: userName, password: password }}
                                        onSuccess={handlePostData}
                                    >
                                        <Stack spacing={3}>
                                            <TextFieldElement required fullWidth label={"Username"} id={"fullWidth"} type={'text'} name={'username'} onChange={(e) => setUserName(e.target.value)} />
                                            <TextFieldElement required fullWidth label={"Password"} id={"fullWidth"} type={'password'} name={'password'} onChange={(e) => setPassword(e.target.value)} />

                                            <Button variant="contained" type={'submit'} >log in</Button>
                                        </Stack>
                                    </FormContainer>
                                </Container>
                            </Stack>


                        </Stack>
                    </Grid>

                </Grid>
            </Box>


        </div>
    );
};

export default Login;
