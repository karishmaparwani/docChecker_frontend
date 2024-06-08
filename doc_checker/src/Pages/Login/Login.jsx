import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../../images/landing_page_img.png'
import Logo from '../../images/logo.png'
import '../SignUpAsPage.css'
import { Stack, Button, Container } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import useAxios from '../../hooks/UseAxios.hook'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slicer';
import BasicModal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalActions, setModalActions] = React.useState()
    const [modalTitle, setModalTitle] = React.useState('')
    const { setMethod, setBody, data, error } = useAxios({
        url: '/auth/login',
        headers: { 'Content-Type': 'application/json' },
        autoFetch: false
    });

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handlePostData = () => {
        setMethod('POST');
        setBody({ username: userName, password: password })
    };

    useEffect(() => {
        if (data && Object.keys(data).length) {
            // sessionStorage.setItem('userInfo', JSON.stringify(data))
            dispatch(setUser(data))
            if(data.role === 'customer') {
                navigate('/customer-home')
            }
            if(data.role === 'expert') {
                navigate('/expert-home')
            }
            // if(data.role === 'admin') {
            //     navigate()
            // }
        }
            
    }, [data])

    useEffect(() => {
        if (error && Object.keys(error).length) {
            if(error?.response?.data?.message === "UNAUTHORIZED") {
                setModalTitle("Incorrect Password. Please try again.")
            } else {
                setModalTitle(error?.response?.data?.message)
            }

            setModalActions(
                <Stack direction="row" sx={{margin: 'auto'}}>
                    <Button
                        variant="contained"
                        onClick={closeModal}
                        >
                            Close
                    </Button>
                </Stack>
            )
            setShowModal(true)
        }
    },[error])

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
                                            <TextFieldElement required fullWidth label={"Username"} className={"fullWidth"} type={'text'} name={'username'} onChange={(e) => setUserName(e.target.value)} />
                                            <TextFieldElement required fullWidth label={"Password"} className={"fullWidth"} type={'password'} name={'password'} onChange={(e) => setPassword(e.target.value)} />

                                            <Button variant="contained" type={'submit'} >Log In</Button>
                                        </Stack>
                                    </FormContainer>
                                </Container>
                            </Stack>


                        </Stack>
                    </Grid>

                </Grid>
            </Box>
            {showModal && 
                    <BasicModal openModal={openModal}
                    closeModal={closeModal}
                    showModal={showModal}
                    modalTitle={modalTitle}
                    modalActions={modalActions} />
                }

        </div>
    );
};

export default Login;
