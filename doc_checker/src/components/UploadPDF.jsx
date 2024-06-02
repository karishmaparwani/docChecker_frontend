import React from 'react'
import uploadPDFImg from '../images/uploadPDF_img.png'
import Box from '@mui/material/Box';

function UploadPDF({setDocument}) {
    const fileInputRef = React.useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setDocument(file)
            console.log('File selected:', file);

        }
    };
    return (
        <>
            <Box mt={10} mb={10} sx={{ display: 'flex', justifyContent: 'center', height:'20vh'}} >
                <img
                    src={uploadPDFImg}
                    alt={"Upload PDF"}
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer' }}
                />
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="application/pdf"
                    onChange={handleFileChange}
                />
            </Box>
        </>
    )
}

export default UploadPDF