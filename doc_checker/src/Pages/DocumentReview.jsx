import React from 'react'
import HighlightDocument from '../components/HighlightDocument'
import { Worker } from '@react-pdf-viewer/core';
import PDF from '../samplePDF/pdf-open-parameters.pdf'
//import PDF from '../samplePDF/DocChecker - Product Requirement Document (1).pdf'
import Typography from '@mui/material/Typography';
import ErrorBoundary from '../components/ErrorBoundary';
import DisplayNotesSidebarExample from '../components/DisplayNotesSidebarOriginal'

function DocumentReview() {
  return (
    <>
        <Typography variant="h4" ml={5} mt={2} mb={2} sx={{ fontWeight: 'bold' }}>
                Document Review
        </Typography>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <div
                    style={{
                        height: '700px',
                    //   width: '900px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                <ErrorBoundary>
                    <HighlightDocument fileUrl={PDF} />
                    {/* <DisplayNotesSidebarExample fileUrl={PDF} /> */}

                </ErrorBoundary>   
            </div>
        
        </Worker>
    </>
  )
}

export default DocumentReview