import React, { useState, useEffect } from 'react'
import HighlightDocument from '../components/HighlightDocument'
import { Worker } from '@react-pdf-viewer/core';
import Typography from '@mui/material/Typography';
import ErrorBoundary from '../components/ErrorBoundary';
import DisplayNotesSidebarExample from '../components/DisplayNotesSidebarOriginal'
import { useLocation } from 'react-router-dom';
import useAxios from '../hooks/UseAxios.hook'
import { CircularProgress, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import {ROLES} from '../Constants'

function DocumentReview() {
    const location = useLocation();
    const { docId } = location.state || {};
    const [pdf, setPdf] = useState("")
    const [isReviewCompleted, setIsReviewCompleted] = useState(false)
    const { data, error, loading } = useAxios({
        url: `/review/${docId}`,
        autoFetch: true
    });
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        setPdf(data?.attachment)
        if(data?.comment) {
            localStorage.setItem([docId], JSON.stringify(data?.comment) );
        }
    }, [data])

    const completeReviewProcess = () => {
        setIsReviewCompleted(true)
    }

    return (
        <>
            <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Document Review
                </Typography>
                {user.role === ROLES.CUSTOMER && <Button variant="contained" >Contact Expert</Button>}
                {user.role === ROLES.EXPERT && <Button variant="contained" onClick={completeReviewProcess}>Completed</Button>} 
                
            </Box>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                <div
                    style={{
                        height: '680px',
                        //   width: '900px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    {
                        loading ? <CircularProgress color='secondary' size={200}/> :
                            <ErrorBoundary>
                                {pdf && <HighlightDocument fileUrl={pdf} highlightData={data} docId={docId}
                                isReviewCompleted={isReviewCompleted} />}
                            </ErrorBoundary>
                    }

                </div>

            </Worker>
        </>
    )
}

export default DocumentReview